var app = angular.module('MyApp');

app.controller('LoginCtrl', ['$scope', "$location", "UserService",
    function($scope, $location, UserService) {



    $scope.login = function(returnUser) {
        UserService.login(returnUser).then(function (response) {
            $location.path('/property')
        }, function(response) {
            alert(response.data.message);
        })
    }

}]);
