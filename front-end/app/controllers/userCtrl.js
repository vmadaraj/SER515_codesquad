// angular.module('userController', [])

// .controller("regCtrl", function($scope, $http, $location) {
//     var app = this;
//     $scope.submit = function(form) {
//         var user = {
//             'username' : $scope.username,
//             'email' : $scope.email,
//             'password' : $scope.password
//         }
//         app.errorMsg = false;
//         console.log(user);
//         $http.post('/api/users', user).then(function(res) {
//             console.log(res.data.success);
//             console.log(res.data.message);
//             if (res.data.success){
//                 app.successMsg = res.data.message;
//                 // $location.path('/home');  // check not working
//             }
//             else {
//                 app.errorMsg = res.data.message;
//             }

//         });
//     };
// });

angular.module('userController',[])


.controller('regCtrl',function($http,$location,$timeout, $window){

var app=this;

    this.registerUser=function(data)
    {
        app.errorMessage=false;
        // console.log(this.data);

          $http.post('/api/users',this.data).then(function(responsedata){
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