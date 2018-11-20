angular.module('bookingdetailsController',[]).config(function(){
    console.log('testing details..... ctrl');
})

.controller("bookingDetailsController", function($scope, $http) {
  console.log('test');
  $http.get("../../resources/JSON/bookingData.JSON").success(function(data){
    console.log(data);
    $scope.bookingDetails = data;
  });

});
