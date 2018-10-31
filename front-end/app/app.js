
var app = angular.module('airlineApp',['appRoutes', 'flightController', 'detailsController']).config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);
