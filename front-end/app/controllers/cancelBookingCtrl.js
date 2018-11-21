angular.module('cancelBookingHistoryController',[]).config(function(){
    console.log('testing Cancel Booking History ctrl');
  })
  
  .controller("cancelBookingHistoryCtrl", function($scope, $http, $window) {
  console.log('test');
    $http.get("../../resources/JSON/cancelBookings.JSON").success(function(data){
      console.log(data);
      $scope.cancelBookings = data;
    });

    $scope.cancelOneBooking = function(bookingItem){
        console.log(bookingItem)
        $http.put('api/bookings/:id/update',bookingItem).then(function(res,$http){
            console.log(res.data);
            if(res.data.success)
           {
                alert(res.data.message);
                $window.location.href = "/userProfile";
           }
       });
    };
  });