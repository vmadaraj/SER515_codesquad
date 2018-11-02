angular.module('mainController', [])

.controller("mainCtrl", function($scope, $http, $location, $timeout){
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
                $timeout(function() {
                    window.location.href = "/home";
                }, 1200);
            }
            else {
                app.errorMsg = res.data.message;
            }

        });

    };
});