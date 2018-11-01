angular.module('detailsController',[]).config(function(){
    console.log('testing details ctrl');
})

.controller("flightsDetailsController", function($scope, $http) {
  console.log('test');
  $http.get("../../resources/JSON/flightDetails.json").success(function(data){
    $scope.flights = data;
  });
});
