angular.module('airlineApp', ['ngRoute'])
.config(function($routeProvider)
{
    $routeProvider
    .when('/home',{
        templateUrl: 'app/views/index.html'
    });

   
    $routeProvider .when('/login', {
        templateUrl: 'app/views/pages/login.html'
    });
});

