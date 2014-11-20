function CartController($scope) {
    $scope.items = [{
        title: 'Paint pots',
        quantity: 8,
        price: 3.99
    }, {
        title: 'Polka dots',
        quantity: 17,
        price: 12.95
    }, {
        title: 'Pebbles',
        quantity: 8,
        price: 3.99
    }];
    $scope.remove = function(index) {
        $scope.items.splice(index, 1);
    }
}
