angular.module('detailsController',[]).config(function(){
    console.log('testing details ctrl');
})

.controller("flightsDetailsController", function($scope, $http) {
  console.log('test');
  $http.get("../../resources/JSON/departFlights.JSON").success(function(data){
    console.log(data);
    $scope.flights = data;
  });

  $http.get("../../resources/JSON/returnFlights.JSON").success(function(data){
    console.log(data)
     $scope.rflights = data;
   });
});
