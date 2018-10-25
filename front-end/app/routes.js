angular.module('airlineApp', ['ngRoute'])
.config(function($routeProvider, $locationProvider)
{
    $routeProvider
    .when('/home',{
        templateUrl: 'app/views/index.html'
    });

    $locationProvider.html5Mode({
        enabled : true,
        requireBase : false
    });
    
});

