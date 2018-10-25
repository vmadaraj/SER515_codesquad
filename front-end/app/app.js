angular.module('airlineApp',['appRoutes', 'smart-table']).config(function(){
 console.log('angular');
});



// angular.module('airlineApp',['appRoutes']).
// controller('MainCtrl', function($rootScope, $scope, $mdToast, $animate, $http, $timeout, $q, $log) {
// console.log("dummy");
//   // Initialize the scope variables
//   $scope.credentials={
//     'source' : '',
//     'destination' : ''
//   }
//
//   $scope.search = function() {
//     var credentials = {
//       source : $scope.source,
//       destination : $scope.destination
//     }
//       console.log(credentials.source);
//     }
//
//
//   })
//
//
app.config(function($routeProvider)
{
    $routeProvider

    .when('/login', {
        templateUrl: 'front-end/app/views/pages/login.html'
    });

    $routeProvider

    .when('/flightDetails', {
        templateUrl: 'front-end/app/views/pages/flightDetails.html'
    });

    $routeProvider

    .when('/about', {
        templateUrl: 'front-end/app/views/pages/about.html'
    });
});
