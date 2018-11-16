angular.module('bookingController',[]).config(function(){
})

.controller("bookController", function($scope, $location,$window, $http) {
    console.log('testing book');
    $scope.submit = function(form){
        var gender
        if($scope.male==null)
        gender=$scope.female;
        else
        gender=$scope.male;
        rand = Math.floor((Math.random()*6)+1)
        console.log(rand)
        var booking ={
            'bookingid':rand,
            'firstName':$scope.firstName,
            'lastName':$scope.lastName,
            'email':$scope.email,
            'phone':$scope.phone,
            'gender':gender,
            'Isactive':true


        }
        console.log(booking)
        $http.post('/api/bookingFlight',booking).then(function(res,$http){
            console.log(res.data);
       
           //
   
   
       })
    }
    // $scope.submit = function(form){
    //     console.log('submitted');
    //     console.log($scope.source);
    //     var flight = {
    //           'source' : $scope.source,
    //           'destination' : $scope.destination,
    //           'departDate' : $scope.departDate,
    //           'returnDate' : $scope.returnDate,
    //         }
    //  $http.post('/api/authenticateFlights',flight).then(function(res,$http){
    //      console.log(res.data);
    //      console.log("flight details:")
    
    //     //


    // })

    // $window.location.href = '/flightDetails';

   
     
    // // $http.post('api/searchFlightOn',this.flight);
    // }
    // $scope.goto = function(page) {
    //     console.log(page);
    //     $location.path(page);
    // };
})