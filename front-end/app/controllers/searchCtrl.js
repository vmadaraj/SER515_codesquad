angular.module('flightController',[]).config(function(){
    console.log('testing ctrl');
})
.controller("TestCtrl1", function($scope, $location,$http) {


})

.controller("searchController", function($scope, $location,$window, $http,flightFactory) {
    console.log('testing s');
    $scope.submit = function(form){
        console.log('submitted');
        console.log($scope.source);
        var flight = {
              'source' : $scope.source,
              'destination' : $scope.destination,
              'departDate' : $scope.departDate,
              'returnDate' : $scope.returnDate,
            }
     $http.post('/api/authenticateFlights',flight).then(function(res){
         console.log(res.data);
         flightFactory.set(res.data)
         console.log("flight details:")
         
         console.log(flightFactory.get())
        $window.location.href = '/flightDetails';

    })
   
     
    // $http.post('api/searchFlightOn',this.flight);
    }
    $scope.goto = function(page) {
        console.log(page);
        $location.path(page);
    };
})
