const blockchainAnchor = require('blockchain-anchor')

function myController($scope) {
    function taskBlokcAnchor() {
        // https://github.com/Tierion/blockchain-anchor
        $scope.banchorAddress = "mqw6tYvfBrELNYJtwKpCod4FjbmxRaRCfN"
        $scope.banchorWif = "cUPa6Zr2jPGREvWsmz8GhjaehD824kFNFjvVRF6uQZFyqLNzUYco"
        // "HELLO DLTDOJO.ORG"
        $scope.banchorData = "48454c4c4f20444c54444f4a4f2e4f5247"
    }

    $scope.banchorEmbed = function () {
        let anchorOptions = {
            useTestnet: true,
            blockchainServiceName: 'insightbitpay',
            feeSatoshi: 90000
        }
        let hexData = $scope.banchorData
        let wif = $scope.banchorWif
        // TODO  bitcoin-js version
        //let banchorKey = bitcore.PrivateKey.fromWIF(wif);
        //$scope.banchorAddress = banchorKey.toAddress().toString()
        //console.log(banchorKey)

        let anchor = new blockchainAnchor(wif, anchorOptions)
        anchor.embed(hexData, function (err, transactionId, rawTransaction) {
            if (err) {
                // do something
                console.log(err)
            } else {
                console.log('New transaction Id = ' + transactionId);
                console.log('Raw tx = ' + rawTransaction);
            }
        });
    }
    taskBlokcAnchor()
}
let ngModule = angular.module('myApp', [])
ngModule.controller("MyController", ["$scope", myController])