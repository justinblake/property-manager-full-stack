var app = angular.module('MyApp');

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when('/property', {
            templateUrl: '/components/properties/properties.html',
            controller: 'PropertiesCtrl'
        })
        .when('/', {
            templateUrl: '/components/home/home.html',
            controller: 'HomeCtrl'
        })
        .when('/account', {
            templateUrl: '/components/account/account.html',
            controller: 'AccountCtrl'
        })
        .when('/listings', {
            templateUrl: '/components/listings/listings.html',
            controller: 'ListingCtrl'
        })


}]);
