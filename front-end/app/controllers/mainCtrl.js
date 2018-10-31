angular.module('mainController', [])

.controller("mainCtrl", function($scope, $http, $location){
    var app = this;
    console.log('testing login module11111');
    $scope.submit = function(form) {
        var userAuth = {
            'username' : $scope.username,
            'password' : $scope.password
        }
        app.errorMsg = false;
        console.log(userAuth);
        $http.post('/api/authenticate', userAuth).then(function(res) {
            console.log('testing login success');
            console.log(res.data.success);
            console.log(res.data.message);
            if (res.data.success){
                app.successMsg = res.data.message;
                $location.path('/home');  // check not working
            }
            else {
                app.errorMsg = res.data.message;
            }

        });

    };
});