var app = angular.module('MyApp');

app.service('HttpService', ['$http', function ($http) {

    // user requests

    this.getUserInfo = function() {
        return $http.get('/api/user/')
            .then(function(response) {
                return response.data;
            })
    };

    this.updateSpecificUser = function(editUser) {
        return $http.put('/api/user/', editUser)
            .then(function(response) {
                return response.data;
            })
    };

    // property requests

    this.getProperties = function () {
        return $http.get('/api/property/')
            .then(function (response) {
                return response.data;
            }, function (response) {
                console.log("There was an error and it was: " + reponse.status + ":" + response.statusText)
            });
    };

    this.saveNewProperty = function (input) {
        return $http.post('/api/property/', input)
            .then(function (response) {
                return response.data;
            }, function (response) {
                console.log("Status num: " + response.status + " " + response.statusText);
            });
    };



    this.updateSpecificProperty = function (id, updatedProperty) {
        return $http.put('/api/property/' + id, updatedProperty)
            .then(function (response) {
                return response.data;
            }, function (response) {
                console.log("Status num: " + response.status + " " + response.statusText);
            });
    };

    this.deleteProperty = function (id) {
        return $http.delete('/api/property/' + id)
            .then(function (response) {
                return response.data;
            }, function (response) {
                console.log("Status num: " + response.status + " " + response.statusText);
            })
    };

    // all properties get

    this.getAllProperties = function () {
        return $http.get('/all')
            .then( function(response) {
                return response.data;
            })
    }

}]);
