angular.module('airlineApp',['appRoutes']).
config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
  }])

.controller("TestCtrl1", function($scope, $location) {
    $scope.title = "Simple Router Example";
    $scope.goto = function(page) {
        console.log(page);
        $location.path(page);
    };
})







