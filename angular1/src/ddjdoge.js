var CoinInfo = require('coininfo')
var CoinKey = require('coinkey')

function myController($scope) {
    var ck = CoinKey.createRandom(CoinInfo('DOGE'))
    $scope.doge = {
        privateKey: ck.privateWif,
        publicKey: ck.publicKey.toString('hex'),
        address: ck.publicAddress
    }
    console.log($scope.doge)
}

let ngModule = angular.module('myApp', [])
ngModule.controller('MyController', ['$scope', myController])