var app = angular.module('airlineApp',['appRoutes', 'flightController', 'mainController', 'userController', 'detailsController','flightService']).config(['$locationProvider', function($locationProvider) {

	$locationProvider.hashPrefix('');
}]);
