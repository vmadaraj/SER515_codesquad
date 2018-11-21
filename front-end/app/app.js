
var app = angular.module('airlineApp',['appRoutes', 'bookingdetailsController','flightController', 'mainController', 'userController', 'detailsController','bookingController', 'bookingHistoryController', 'cancelBookingHistoryController', 'userServices', 'authServices'])

.config(function($httpProvider, $locationProvider){
	$locationProvider.hashPrefix('');
	$httpProvider.interceptors.push('AuthInterceptors');
});
