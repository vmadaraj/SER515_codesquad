angular.module('appRoutes',['ngRoute'])
.config(function($routeProvider){

    $routeProvider.when('/home',{
        templateUrl: 'app/views/index.html'
    });
});