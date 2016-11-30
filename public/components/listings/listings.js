var app = angular.module('MyApp');

app.controller('ListingCtrl', ['$scope', 'HttpService', function($scope, HttpService) {

    $scope.allProperties = {};

    (function getAllProperties() {
        HttpService.getAllProperties().then(function (allProperties) {



            $scope.allProperties = allProperties;
            console.log("$scope.allProperties " + $scope.allProperties);
        })
    })();



}]);