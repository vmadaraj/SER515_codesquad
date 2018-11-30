angular.module('mainController', ['authServices'])



.controller('mainCtrl',function(Auth, $timeout, $location, $window, $rootScope, $scope, $http){


    var app = this;

        if (Auth.isLoggedIn()) {
            console.log('Success : User is Logged in.');
            app.isLoggedIn = true;
            Auth.getUser().then(function(data) {
                console.log(data.data.username);
                app.username = data.data.username;
                app.email = data.data.email;
            });
        } else {
            console.log('Failure : User is not Logged in.');
            app.isLoggedIn = false;
            app.username = '';
            app.email = '';
            // app.loadme = true;
        }


    this.dologin=function(logindata)
    {
      console.log("check the hit 1");
        app.errorMessage=false;
        console.log(logindata);
          Auth.login(app.logindata).then(function(responsedata){
            console.log("check the hit 2");
           if(responsedata.data.success)
           {
                app.successMessage = responsedata.data.message;

                $timeout(function() {
                    $window.location.href='/home';
                    app.logindata = '';
                    app.successMessage = false;
                }, 2000);
           }
           else
           {
                app.errorMessage = responsedata.data.message;
           }
        });
    };

    this.logout = function() {
        Auth.logout();
        $window.location.href='/logout';
        // $timeout(function() {
        //     $window.location.href='/';
        // }, 50000);
    };

    this.afterLogout = function() {
        console.log('check here');
        $timeout(function() {
            $window.location.href='/';
        }, 1000);
    };

    this.getBookingsHistory = function(){
      console.log("naren")
      console.log(app.email)
      var booking = {
            'email' : app.email
          }
       $http.post('/api/bookings',booking).then(function(res,$http){
           console.log("hekkooo");
           console.log(res.data)

      })

      $window.location.href = '/bookingHistory';
    };

    this.getCancelBookings = function(){
        console.log("naren")
        console.log(app.email)
        var booking = {
              'email' : app.email
            }
         $http.post('/api/cancelBookings',booking).then(function(res,$http){
             console.log("hekkooo");
             console.log(res.data)

        })


        $window.location.href = '/cancelBooking';

      };

});
