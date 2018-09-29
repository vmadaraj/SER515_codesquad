angular.module('airlineApp', ['ngRoute'])
.config(function($routeProvider)
{
    $routeProvider

    .when('/login', {
        templateUrl: 'app/views/pages/login.html'
    });
});

