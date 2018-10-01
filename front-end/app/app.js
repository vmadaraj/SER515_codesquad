angular.module('airlineApp',['appRoutes']).config(function(){
 console.log('angular');
});
 
 app.config(function($routeProvider)
{
    $routeProvider

    .when('/login', {
        templateUrl: 'front-end/app/views/pages/login.html'
    });
});
