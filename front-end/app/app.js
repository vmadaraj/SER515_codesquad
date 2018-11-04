var app = angular.module('airlineApp',['appRoutes', 'flightController', 'mainController', 'userController', 'detailsController', 'userServices', 'authServices'])

.config(function($httpProvider){

	$httpProvider.interceptors.push('AuthInterceptors');
});



