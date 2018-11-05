
var app = angular.module('airlineApp',['appRoutes', 'flightController', 'mainController', 'userController', 'detailsController', 'userServices', 'authServices'])

.config(function($httpProvider, $locationProvider){
	$locationProvider.hashPrefix('');
	$httpProvider.interceptors.push('AuthInterceptors');
});
