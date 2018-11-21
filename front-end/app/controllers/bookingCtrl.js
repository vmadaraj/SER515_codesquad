

angular.module('bookingController',[]).config(function(){
})

.controller("bookController", function($scope, $location,$window, $http) {
    console.log('testing book');
    var idString;
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
      }
    $scope.submit = function(form){
        var gender;
        var bookingID;
        var id;
        rand = getRandomInt(120000,205608);
        console.log(rand)
        if($scope.male==null)
        gender=$scope.female;
        else
        gender=$scope.male;
    //     $http.post('/api/bookingIDS',booking).then(function(res,$http){
    //         console.log("booking isd")
    //         console.log(res.data);
    //         bookingID = res.data;
    //         id=parseInt(bookingID)+1
    //         console.log(id);
    //         idString = id.toString();
    //         console.log(idString);

           


    //    })    
    console.log(getSelSeats());
       var seat=getSelSeats();
        var booking ={
            'bookingid':rand.toString(),
            'firstName':$scope.firstName,
            'lastName':$scope.lastName,
            'email':$scope.email,
            'phone':$scope.phone,
            'gender':gender,
            'seat':seat,
            'Isactive':true


        }
        console.log(booking)
        $http.post('/api/bookingFlight',booking).then(function(res,$http){
            //console.log(res.data);

           //


       })
     $window.location.href = '/bookedFlight';


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
