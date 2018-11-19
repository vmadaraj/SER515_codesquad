// angular.module('bookingHistoryController',['bookingHistoryServices']).config(function(){
//     console.log('testing Booking History ctrl');
// })

// .controller("bookingHistoryCtrl", function(BookingHistory, $http, $scope) {
//   console.log('test 000000');
//   $scope.getList = function() {
//     console.log($scope.email1)
//     // console.log(data)
//     console.log('test 99999');
//     // $http.get('/api/bookings').then(function(data) {
//     BookingHistory.getList().then(function(data) {
//       console.log('test 191991919');
//       console.log(data);
//     });
//   };
// });



angular.module('bookingHistoryController',[]).config(function(){
  console.log('testing Booking History ctrl');
})

.controller("bookingHistoryCtrl", function($scope, $http) {
console.log('test');
  $http.get("../../resources/JSON/bookingHistory.JSON").success(function(data){
    console.log(data);
    $scope.bookingHistory = data;
  });
});



// BookingHistory, $scope, $http
// BookingHistory.getList().then(function(data)) {
//   console.log(data);
// }
// ['bookingHistoryServices']
// BookingHistory,
