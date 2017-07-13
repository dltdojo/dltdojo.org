const bitcoreLibDash = require('bitcore-lib-dash')

function myController($scope) {
    var pk = new bitcoreLibDash.PrivateKey()
    $scope.dash = {
        privateKey: pk.toWIF(),
        publicKey: pk.toPublicKey().toString('hex'),
        address: pk.toAddress().toString()
    }
    console.log($scope.dash)
}

let ngModule = angular.module('myApp', [])
ngModule.controller('MyController', ['$scope', myController])