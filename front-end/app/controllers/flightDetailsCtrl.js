angular.module('detailsController',[]).config(function(){
    console.log('testing details ctrl');
})

.controller("flightsDetailsController", ['$scope', '$http' ,function($scope, $http) {
  $http.get("../../resources/JSON/flightDetails.json").success(function(data){
    $scope.flights = data;
  });
}]);
