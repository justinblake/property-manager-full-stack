var app = angular.module('MyApp');

app.controller('HomeCtrl', ['$scope', '$location', function($scope, $location) {

    $scope.register = function() {
        $location.path('/register');
    };

    $scope.login = function() {
        $location.path('/login');
    };

    $scope.seeAll = function() {
        $location.path('/listings');
    };

}]);