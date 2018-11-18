angular.module('cancelBookingHistoryController',[]).config(function(){
    console.log('testing Cancel Booking History ctrl');
  })
  
  .controller("cancelBookingHistoryCtrl", function($scope, $http) {
  console.log('test');
    $http.get("../../resources/JSON/cancelBookings.JSON").success(function(data){
      console.log(data);
      $scope.cancelBookings = data;
    });

    $scope.cancelOneBooking = function(bookingItem){
        console.log(bookingItem)
        $http.put('/api/cancelBookingItem',bookingItem).then(function(res,$http){
            console.log(res.data);
            // console.log("flight details:")
       })
    }
  });