var app = angular.module('MyApp');

app.controller('PropertiesCtrl', ['$scope', 'HttpService', '$localStorage', function ($scope, HttpService, $localStorage) {

    $scope.allProperties = {};
    $scope.propertyArray = [];
    $scope.showEditableFields = false;


    $scope.registerNew = !$scope.registerNew;
    $scope.showMyProperties = !$scope.showMyProperties;

    $scope.showAllProperties = function () {
        $scope.showMyProperties = !$scope.showMyProperties
    };


    // all httpService calls

    // get all properties

    (function getProperties() {
        HttpService.getProperties().then(function (properties) {
            $scope.allProperties = properties;
            $localStorage.user = properties[0].user;

        });
    })();

    // save a new property

    $scope.saveNewProp = function (input) {
        HttpService.saveNewProperty(input)
            .then(function (newProperty) {


            });
        HttpService.getProperties().then(function (properties) {
            $scope.allProperties = properties;
        });
        $scope.registerNew = !$scope.registerNew;
    };

    // update an existing property

    $scope.updateSpecificProperty = function (index, updatedProperty) {
        var propertyId = updatedProperty._id;
        console.log("inside ctrl function");

        HttpService.updateSpecificProperty(propertyId, updatedProperty)
            .then(function (newestPropertyObject) {
                $scope.allProperties = newestPropertyObject;
                var testThis = JSON.stringify($scope.allProperties);
                console.log("testThis " + testThis);
            });
        HttpService.getProperties().then(function (properties) {
            $scope.allProperties = properties;
            $scope.showMyProperties = !$scope.showMyProperties;
        });

    };

    // delete an existing property

    $scope.deleteSpecificProperty = function (input) {
        var deleteId = input._id;
        var newTest = JSON.stringify(input);
        console.log("newTest " + newTest);

        HttpService.deleteProperty(deleteId).then(function () {

        });
        HttpService.getProperties().then(function (properties) {
            $scope.allProperties = properties;
        });
    };



}]);



