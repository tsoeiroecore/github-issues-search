angular.module("app").config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/home', { template: "<search></search>" });
    $routeProvider.otherwise({ redirectTo: "/home" });
});