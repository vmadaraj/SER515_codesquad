angular.module('flightController',[]).config(function(){
    console.log('testing ctrl');
})
.controller("TestCtrl1", function($scope, $location) {

})

.controller("searchController", function($scope, $location) {
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
     console.log(flight);
    // $http.post('api/searchFlightOn',this.flight);
    }
    $scope.goto = function(page) {
        console.log(page);
        $location.path(page);
    };
})
