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

    .when('/booking',{

          templateUrl: 'app/views/pages/booking.html'
    })

    .when('/flightDetails', {
        templateUrl: 'front-end/app/views/pages/flightDetails.html',
        controller:'flightDetailsController',
        controllerAs:'filghtDetails'
    })

    .when('/bookingDetails', {
        templateUrl: 'front-end/app/views/pages/bookingDetails.html'
    })

    .when('/home',{
        templateUrl: 'app/views/index.html'
    })

    .when('/login', {
        templateUrl: 'front-end/app/views/pages/login.html'
    })

    .when('/logout', {
        templateUrl: 'front-end/app/views/pages/logout.html'
    })


    .when('/about', {
        templateUrl: 'front-end/app/views/pages/about.html'
    })


    .when('/userProfile', {
        templateUrl: 'front-end/app/views/pages/userProfile.html'
    })

    .when('/bookingHistory', {
        templateUrl: 'front-end/app/views/pages/bookingHistory.html'
    })


    .when('/register', {
        templateUrl: 'front-end/app/views/pages/register.html',
        controller: 'regCtrl',
        controllerAs: 'register'

    });


    // $routeProvider .when('/login', {
    //     templateUrl: 'app/views/pages/login.html'
    // });

    // $routeProvider .when('/about',{
    //     templateUrl: 'app/views/pages/about.html'
    // });

});
