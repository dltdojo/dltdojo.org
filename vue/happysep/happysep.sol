pragma solidity ^0.4.14;

import "github.com/OpenZeppelin/zeppelin-solidity/contracts/ownership/Ownable.sol";
import "github.com/OpenZeppelin/zeppelin-solidity/contracts/token/MintableToken.sol";

contract HappySeptember is Ownable {
    
    address public tokenAddress = 0x97d961543CBf38BE1335b123C4f87767e58ae299;
    MintableToken public token;
    event PlayEvent( address indexed from, uint amount, uint random1000, uint rate, uint reward); 
    
    function HappySeptember(){
        token = MintableToken(tokenAddress);
    }
    
    function setTokenAddress(address _address) onlyOwner{
        tokenAddress = _address;
        token = MintableToken(tokenAddress);
    }
    
    function balanceOf() constant returns (uint) {
        return token.balanceOf(this);
    }
    
    function allowance(address _addr) constant returns (uint) {
        return token.allowance(_addr, this);
    }
    
    // The msg.sender must call approve(this, balance) beforehand so that
    // transferFrom() will work and not throw.
    function play(uint _amount) returns (uint) {
        require(_amount > 0 && allowance(msg.sender) == _amount);
        token.transferFrom(msg.sender, this, _amount);
        bytes32 randomHash =  sha3(block.blockhash(block.number-1),_amount, msg.sender);
        uint random100 = uint(randomHash) % 100;
        uint rate = 10 / ( (random100 / 10 + 1));
        // 0-9 x10
        // 10-19 x5
        // 20-29 x3
        // 30-39 x2
        // 40-49 x2
        // 50-99 x0
        uint reward = 0;
        if(random100 < 50){
            reward = _amount * rate;
            if(reward<=balanceOf()){
               token.transfer(msg.sender, reward);
            }
        }
        PlayEvent(msg.sender, _amount, random100, rate, reward);
        return reward;
    }
}

contract TestToken is MintableToken {
    function TestToken(){
        totalSupply = 21009999 ether;
        balances[msg.sender] = totalSupply;
    }
}

contract TestUser {
    
    HappySeptember hsep;
    TestToken token;
    function setContracts(address _addrHappysep, address _addrToken){
      hsep = HappySeptember(_addrHappysep);
      token = TestToken(_addrToken);
    }
    
    // ERC20   function approve(address _spender, uint _value) returns (bool success);
    function approve(address _spender, uint _value) returns (bool) {
        // To change the approve amount you first have to reduce the addresses`
        //  allowance to zero by calling `approve(_spender, 0)` if it is not
        //  already 0 to mitigate the race condition described here:
        //  https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
        token.approve(_spender, 0);
        return token.approve(_spender, _value);
    }
    
    function play(uint _amount) returns (uint) {
        return hsep.play(_amount);
    }
    
}

contract TestHappySep {
    
    TestUser alice = new TestUser();
    HappySeptember hsep;
    TestToken token;
    
    event LogEvent( uint log1); 
    
    function _init() private {
        hsep = new HappySeptember();
        token = new TestToken();
        hsep.setTokenAddress(token);
        alice.setContracts(hsep,token);
        require(token.balanceOf(this) == 21009999 ether);
    }
    
    function test1Approve(){
        _init();
        token.transfer(hsep, 19998888 ether);
        require(hsep.balanceOf()==19998888 ether);
        token.transfer(alice, 200 ether);
        require(token.balanceOf(alice)==200 ether);
        require(alice.approve(hsep, 17 ether));
        // function allowance(address _owner, address _spender) constant returns (uint remaining);
        require(token.allowance(alice,hsep) == 17 ether);
        require(hsep.allowance(alice) == 17 ether);
        uint reward = alice.play(17 ether);
        LogEvent(reward);
        LogEvent(token.balanceOf(alice));
        
    }
}