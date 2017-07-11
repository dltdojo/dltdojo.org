var xrpkp = require('ripple-keypairs')

function myController($scope) {
    generateKey($scope)
}

function generateKey($scope) {
    const seed = xrpkp.generateSeed()
    const keypair = xrpkp.deriveKeypair(seed)
    const address = xrpkp.deriveAddress(keypair.publicKey)
    $scope.xrp = {
        secret: seed,
        privateKey: keypair.privateKey,
        publicKey: keypair.publicKey,
        address: address
    }
    console.log($scope.xrp)
}

let ngModule = angular.module('myApp', [])
ngModule.controller('MyController', ['$scope', myController])
