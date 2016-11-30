var app = angular.module('MyApp');

app.controller('RegisterCtrl', ['$scope', '$location', 'UserService',
    function ($scope, $location, UserService) {

        $scope.passwordMessage = "";

        $scope.register = function (newUser) {
            UserService.signup(newUser).then(function (response) {
                $location.path("/login");
            }, function( response) {
                alert("There was a problem: " + response.data.message);
            });
        }

    }]);