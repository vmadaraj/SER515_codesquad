var app = angular.module('airlineApp',['appRoutes', 'flightController', 'mainController', 'userController']).config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);

