const Wallet = require('ethereumjs-wallet')

function myController($scope) {
    var wallet = Wallet.generate()
    $scope.w = {
        privateKey: wallet.getPrivateKeyString(),
        publicKey: wallet.getPublicKeyString(),
        address: wallet.getChecksumAddressString()
    }
    console.log($scope.w)
}

let ngModule = angular.module('myApp', [])
ngModule.controller('MyController', ['$scope', myController])