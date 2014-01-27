var myAppModule = angular.module('myApp', ['ngRoute']);
myAppModule.controller('TextController', function($scope) {
    var someText = {};
    someText.message = '啦啦啦，按住话筒听声音啊！！！！';
    $scope.someText = someText;
});