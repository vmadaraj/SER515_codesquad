
angular.module('userController',['userServices'])

.controller('regCtrl',function(User, $http, $location, $timeout, $window){

var app=this;

    this.registerUser=function(data)
    {
      console.log("hit 1");
        app.errorMessage=false;
        console.log("hit 2");
        console.log(this.data);

          User.create(app.data).then(function(responsedata){
            console.log("hit 4")
            console.log(responsedata)

          	// console.log(responsedata.data.message);
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
