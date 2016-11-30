var app = angular.module('MyApp');

app.controller('AccountCtrl', ['$scope', 'HttpService', '$localStorage', function($scope, HttpService, $localStorage) {

    $scope.userInfo = {};
    $scope.showEditableFields = false;
    $scope.editUser = {};

    (function getUserInfo() {
        HttpService.getUserInfo().then(function(userInfo) {
            $scope.userInfo = userInfo;
        });
    })();

    $scope.updateSpecificUser = function(editUser) {
        HttpService.updateSpecificUser(editUser)
            .then(function(updatedUserInfo) {
                $scope.userInfo = updatedUserInfo;
            });
        HttpService.getUserInfo().then(function(userInfo) {
            $scope.userInfo = userInfo;
        });
    }

}]);