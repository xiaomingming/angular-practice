var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope) {
    $scope.test = function() {
        alert('lalalala');
    };
    // $scope.name = 'xiaoming';
    $scope.myObj = {
        name: 'xiaoming',
        age: 22,
        desc: 'f2e'
    };
});
