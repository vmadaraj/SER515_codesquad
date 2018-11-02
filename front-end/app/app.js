var app = angular.module('airlineApp',['appRoutes', 'flightController', 'mainController', 'userController', 'detailsController']).config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);
