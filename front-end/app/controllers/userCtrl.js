angular.module('userController', [])

.controller("regCtrl", function($scope, $http, $location, $timeout) {
    var app = this;
    app.errorMsg = false;
    console.log('testing new  Button');
    $scope.submit = function(form) {
        console.log("tets babu here");
        var user = {
            'username' : $scope.username,
            'email' : $scope.email,
            'password' : $scope.password
        }
        app.errorMsg = false;
        console.log(user);
        $http.post('/api/users', user).then(function(res) {
            console.log("vnfbdsfbdsbfsdbfhusdbfusd")
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



// $http.post('/api/users', user)