// angular.module('mainController', ['authServices'])

// .controller("mainCtrl", function($scope, $http, $location, $window, $timeout){
//     var app = this;
    
//     if ($window.localStorage.getItem('token')) {
//         console.log('Success : User is Logged in');
//         if ($window.localStorage.getItem('token')) {
//             $http.post('/api/me').then(function(data){
//                 console.log(data);
//             });
//         }
//         else {
//             $q.reject({message : 'User has no token'});
//         }
//     }
//     else {
//         console.log('Failure : User is not Logged in');
//     }
    
//     $scope.submit = function(form) {
//         var userAuth = {
//             'username' : $scope.username,
//             'password' : $scope.password
//         }
//         app.errorMsg = false;
//         $http.post('/api/authenticate', userAuth).then(function(res) {
//             if (res.data.token){
//                 $window.localStorage.setItem('token', res.data.token);
//             }
//             if (res.data.success){
//                 app.successMsg = res.data.message;
//                 $location.path('/home');  // check not working
//             }
//             else {
//                 app.errorMsg = res.data.message;
//             }

//         });
//     };

//     this.logout = function() {
//         $window.localStorage.removeItem('token');
//         $window.location.href='/logout';
//         $timeout(function(){
//             $window.location.href='/';
//         }, 2000);
//     };
// });


angular.module('mainController',['authService'])


.controller('mainCtrl',function(Auth,$timeout,$location,$http,$rootScope,$window){
	//console.log('testing main control');

	var app=this;



	$rootScope.$on('$routeChangeStart',function(){

		if(Auth.isLoggedIn())
  		{
  		console.log('user dsbhfhsdfhbwhfbhsudbffd is logged in');

  		app.LoggedIn=true;

  		Auth.getUser().then(function(data){
  		//console.log(data.data.username);

		 /* $http.post('/api/loginhist',data.data).then(function(data){

		  });   */


		  console.log('return data');
		  console.log(data);
  		  app.username=data.data.username;
		  app.usermail=data.data.email;
		//   app.lastlogin=data.data.lastlogin;
		//   app.firstname=data.data.firstname;
		//   app.lastname=data.data.lastname;
		//   app.contact=data.data.contact;
  		
  		});
  		}
  		else
  		{
  		//console.log('user is not logged in');
  		app.username="";
  		app.LoggedIn=false;
  		}

	});

  

    this.dologin=function(logindata)
    {
        app.errorMessage=false;
        // console.log(this.data);
       // console.log('hitesh');

          Auth.login(app.logindata).then(function(responsedata){
          //	console.log(responsedata.data.message);
          //	console.log(responsedata.data.success);

           if(responsedata.data.success)
           {
			    // console.log("Test babu");

                app.successMessage=responsedata.data.message;
                  
                

                $timeout(function() {
                    //  $location.path('/home');
                    $window.location.href='/home';
                	 app.logindata="";
                	app.successMessage=false;
                }, 2000);

               
           }
           else
           {
                app.errorMessage=responsedata.data.message;
           }


          });
    };

    this.logout=function(){
        Auth.logout();
        $window.location.href='/logout';
    	// $location.path('/logout');
    	$timeout(function() {
            $window.location.href='/';
    		// $location.path('/login');

    	},1000);
    };

});