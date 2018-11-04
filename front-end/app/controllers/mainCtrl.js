angular.module('mainController', ['authServices'])


.controller('mainCtrl',function(Auth, $timeout, $location, $window, $rootScope){
    var app = this;

    // app.loadme = false;

    // $rootScope.$on('$routeChangeStart', function() {
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
    // });


    this.dologin=function(logindata)
    {
        app.errorMessage=false;

          Auth.login(app.logindata).then(function(responsedata){

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

});
	// var app=this;



	// $rootScope.$on('$routeChangeStart',function(){

	// 	if(Auth.isLoggedIn())
  	// 	{
  	// 	console.log('user dsbhfhsdfhbwhfbhsudbffd is logged in');

  	// 	app.LoggedIn=true;

  	// 	Auth.getUser().then(function(data){
  	


	// 	  console.log('return data');
	// 	  console.log(data);
  	// 	  app.username=data.data.username;
	// 	  app.usermail=data.data.email;
		
  		
  	// 	});
  	// 	}
  	// 	else
  	// 	{
  	// 	app.username="";
  	// 	app.LoggedIn=false;
  	// 	}

	// });

  

    // this.dologin=function(logindata)
    // {
    //     app.errorMessage=false;
       

    //       Auth.login(app.logindata).then(function(responsedata){
    //       //	console.log(responsedata.data.message);
    //       //	console.log(responsedata.data.success);

    //        if(responsedata.data.success)
    //        {
	// 		    console.log("Test babu");

    //             app.successMessage=responsedata.data.message;
                  
                

    //             // $timeout(function() {
    //             //     //  $location.path('/home');
    //             //     $window.location.href='/home';
    //             // 	 app.logindata="";
    //             // 	app.successMessage=false;
    //             // }, 2000);

               
    //        }
    //        else
    //        {
    //             app.errorMessage=responsedata.data.message;
    //        }


    //       });
    // };

    // this.logout=function(){
    //     Auth.logout();
    //     $window.location.href='/logout';
    // 	// $location.path('/logout');
    // 	$timeout(function() {
    //         $window.location.href='/';
    // 		// $location.path('/login');

    // 	},1000);
    // };

// });