var app = angular.module('airlineApp',['appRoutes', 'userController', 'mainController']).config(function(){
 console.log('angular');
});
 
 app.config(function($routeProvider)
{
    $routeProvider

    .when('/login', {
        templateUrl: 'front-end/app/views/pages/login.html'
    });

    $routeProvider

    .when('/about', {
        templateUrl: 'front-end/app/views/pages/about.html'
    });

    $routeProvider

    .when('/userProfile', {
        templateUrl: 'front-end/app/views/pages/userProfile.html'
    });

    $routeProvider

    .when('/register', {
        templateUrl: 'front-end/app/views/pages/register.html',
        controller: 'regController',
        controllerAs: 'register'

    });
});