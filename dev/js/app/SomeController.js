function SomeController($scope) {
    $scope.funding = {
        startingEstimate: 0
    };
    var computeNeeded = function() {
        $scope.funding.needed = $scope.funding.startingEstimate * 10;
    };
    $scope.requestFunding = function() {
        window.alert('sorry,please get more customers first.');
    };
    $scope.reset = function() {
        $scope.funding.startingEstimate = 0;
    };
    $scope.$watch('funding.startingEstimate', computeNeeded);
}