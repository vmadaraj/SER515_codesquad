angular.module('airlineApp',['appRoutes','flightController']).
config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
  }])


  






