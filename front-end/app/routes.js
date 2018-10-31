angular.module('appRoutes', ['ngRoute'])
.config(function($routeProvider,$locationProvider)
{
    console.log('testing routes...');
    $routeProvider
    .when('/search',{
        templateUrl: 'app/views/pages/booking.html',
        
    })
    .when('/',{
        
        controller:'searchController',
        controllerAs:'search'
    })
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

