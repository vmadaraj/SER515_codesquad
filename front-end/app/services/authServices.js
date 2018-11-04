angular.module('authServices',[])

.factory('Auth',function($http, AuthToken){
	var authFactory={};
	authFactory.login=function(logindata){
		return $http.post('/api/authenticate',logindata).then(function(data) {
			AuthToken.setToken(data.data.token);
			return data;
		});
	};
	authFactory.isLoggedIn = function(){
		if (AuthToken.getToken()) {
			return true;
		} else {
			return false;
		}
	};

	authFactory.getUser = function() {
		if (AuthToken.getToken()) {
			return $http.post('/api/me');
		} else {
			$q.reject({ message : 'User has no token'});
		}
	};

	// Auth.logout()
	authFactory.logout = function() {
		AuthToken.setToken();
	}
	return authFactory;
})

.factory('AuthToken', function($window){
	var authTokenFactory  = {};

	// AuthToken.setToken(token);
	authTokenFactory.setToken = function(token) {
		if (token) {
			$window.localStorage.setItem('token', token);
		} else {
			$window.localStorage.removeItem('token');
		}
	};

	// AuthToken.getToken();
	authTokenFactory.getToken = function() {
		return $window.localStorage.getItem('token');
	};

	return authTokenFactory;
})

.factory('AuthInterceptors',function(AuthToken){

	var AuthInterceptorsFactory={};

	AuthInterceptorsFactory.request=function(config){

		var token=AuthToken.getToken();

		if(token) config.headers['x-access-token'] = token;

		return config;
	};


	return AuthInterceptorsFactory;

});
		
		// .then(function(data){
// 				//console.log(data);
// 				authToken.setToken(data.data.token);
// 				data.data.lastlogin
// 			return data;
// 		});
// 	};
// 		//Auth.isLoggedIn()
// 	authFactory.isLoggedIn=function(){

// 		if(authToken.getToken())
// 		{
// 			//console.log('token is available');
// 			return true;
// 		}
// 		else
// 		{
// 			//console.log('token is not available');
// 			return false;
// 		}

// 	};

// 	//auth.getUser
// 	authFactory.getUser=function(){

// 		if(authToken.getToken())
// 		{
// 			return $http.post('api/me');
// 		}
// 		else
// 		{
// 			$q.reject({ message: 'User has not token'});
// 		}

// 	};

// 	//Auth.logout();
// 	authFactory.logout=function(){
//             authToken.setToken();
// 	};

// 		return authFactory;
// })

// .factory('authToken',function($window){

// var authTokenFactory={};
//     //authToken.setToken()
//   authTokenFactory.setToken=function(token) {

//   	if(token)
//   	{
//   	$window.localStorage.setItem('token',token);
//   	}
//   	else
//   	{
//   	$window.localStorage.removeItem('token');
//   	}
//   }
//   		//authToken.getToken()
//   authTokenFactory.getToken=function(){
//   	return $window.localStorage.getItem('token');
//   };


// return authTokenFactory;

// })



