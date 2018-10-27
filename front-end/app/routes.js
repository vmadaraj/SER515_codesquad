angular.module('airlineApp', ['ngRoute'])
.config(function($routeProvider)
{
    $routeProvider
    .when('/home',{
        templateUrl: 'app/views/index.html'
    });


    // $locationProvider.html5Mode({
    //     enabled : true,
    //     requireBase : false
    // });
    



    // $routeProvider .when('/login', {
    //     templateUrl: 'app/views/pages/login.html'
    // });

    // $routeProvider .when('/about',{
    //     templateUrl: 'app/views/pages/about.html'
    // });

});

