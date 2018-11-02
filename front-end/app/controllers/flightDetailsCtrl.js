angular.module('detailsController',[]).config(function(){
    console.log('testing details ctrl');
})

.controller("flightsDetailsController", function($scope, $http,flightFactory) {

  console.log('testingggggg');

  console.log(flightFactory.flightData)
  $http.get("../../resources/JSON/temp.json").success(function(data){
    $scope.flights = data;
  });
});
