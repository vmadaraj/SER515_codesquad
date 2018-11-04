angular.module('userController',['userServices'])

.controller('regCtrl',function(User, $http, $location, $timeout, $window){

var app=this;

    this.registerUser=function(data)
    {
        app.errorMessage=false;
        // console.log(this.data);

          User.create(app.data).then(function(responsedata){
          	console.log(responsedata.data.message);
          	console.log(responsedata.data.success);

           if(responsedata.data.success)
           {
                app.successMessage=responsedata.data.message;
                  
                $timeout(function() {
                    $window.location.href='/home';
                }, 2000);

               
           }
           else
           {
                app.errorMessage=responsedata.data.message;
           }


          });

    };

});

