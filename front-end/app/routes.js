angular.module('appRoutes', ['ngRoute'])
.config(function($routeProvider)
{
    console.log('testing routes...');
    $routeProvider
    .when('/search',{
        templateUrl: 'app/views/pages/booking.html',
        controller:'searchController',
        controllerAs:'search'
    })
    .when('/home',{
        templateUrl: 'app/views/index.html'
    });

   
    // $routeProvider .when('/login', {
    //     templateUrl: 'app/views/pages/login.html'
    // });

    // $routeProvider .when('/about',{
    //     templateUrl: 'app/views/pages/about.html'
    // });
});

