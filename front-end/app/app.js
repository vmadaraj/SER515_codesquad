var app = angular.module('airlineApp',['appRoutes', 'flightController', 'mainController', 'userController', 'detailsController', 'authService', 'userServices'])

.config(function($httpProvider){

	$httpProvider.interceptors.push('AuthInterceptors');
});


