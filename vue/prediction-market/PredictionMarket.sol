pragma solidity ^0.4.14;

// Reality Keys - Facts about the future, cryptographic proof when they come true  https://www.realitykeys.com/
// gnosis-contracts/contracts/solidity/Markets at master · ConsenSys/gnosis-contracts https://github.com/ConsenSys/gnosis-contracts/tree/master/contracts/solidity/Markets
// decentralized-prediction-market/contracts at master · Nikhil22/decentralized-prediction-market https://github.com/Nikhil22/decentralized-prediction-market/tree/master/contracts

import "github.com/OpenZeppelin/zeppelin-solidity/contracts/token/ERC20Basic.sol";
import "github.com/OpenZeppelin/zeppelin-solidity/contracts/lifecycle/TokenDestructible.sol";
import "github.com/OpenZeppelin/zeppelin-solidity/contracts/token/MintableToken.sol";

contract PredictionMarket is TokenDestructible {
    
    ERC20Basic public ddjat = ERC20Basic(0x97d961543CBf38BE1335b123C4f87767e58ae299);
    
    mapping (bytes32 => Question) public questions;
    
    struct Question {
        bool resolved;
        bool outcome;
        uint256 numPositiveBets;
        uint256 numNegativeBets;
        uint256 positiveBetAmount;
        uint256 negativeBetAmount;
        uint256 endTime;
        mapping(address => Bet) bets;
    }

    struct Bet {
        address bettingAddress;
        bool bet;
        uint256 amount;
    }
    
    event AddedTrustedSource(address source);
    event NewBet(address _better, bool _bet, uint _amount, uint64 _questionId);
    event QuestionResolved(address source, uint64 _questionId, bool _outcome);
    event QuestionAdded(bytes32 _questionHash, uint256 _endTime);
    event Claimed(address claimant, uint256 amount);
    
    function addQuestion(bytes32 _questionHash, uint256 _endTime) public onlyOwner returns (bool success) {
        Question memory question = Question(
          false,
          false,
          0,
          0,
          0,
          0,
          _endTime
        );
        questions[_questionHash] = question;
        QuestionAdded(_questionHash, _endTime);
        return true;
    }
    
    // contract development - Solidity function to return a data struct - Ethereum Stack Exchange  
    // https://ethereum.stackexchange.com/questions/18064/solidity-function-to-return-a-data-struct
    function questionOf(bytes32 _questionSha3Hash) public returns ( bool _resolved,
        bool _outcome,
        uint256 _numPositiveBets,
        uint256 _numNegativeBets,
        uint256 _positiveBetAmount,
        uint256 _negativeBetAmount,
        uint256 endTime){
        Question q = questions[_questionSha3Hash];
        return (q.resolved, q.outcome, q.numPositiveBets, q.numNegativeBets, q.positiveBetAmount, q.negativeBetAmount, q.endTime);
    }
    
}

contract MockPredictionMarket is PredictionMarket{
    
    function setMockDdjat(address _address){
        ddjat = ERC20Basic(_address);
    }
    
}

contract TestToken is MintableToken {
    function TestToken(){
        totalSupply = 21009999 ether;
        balances[msg.sender] = totalSupply;
    }
}

contract TestPreMarket {
    
    MockPredictionMarket pm;
    TestToken token;
    
    function _init() private {
        pm = new MockPredictionMarket();
        token = new TestToken();
        pm.setMockDdjat(token);
    }
    
    function testAddQuestioin(){
        _init();
        bytes32 qhash = sha3('ETH/USD at least 300');
        pm.addQuestion(qhash, now + 3 days);
        var(_resolved, _outcome, _numPositiveBets, _numNegativeBets, _positiveBetAmount, _negativeBetAmount, _endTime) = pm.questionOf(qhash);
        // pm.addQuestion(sha3('ETH/USD less than 300 '), now+3days);
        require(_numPositiveBets == 0 && _numNegativeBets == 0);
    }
    
}