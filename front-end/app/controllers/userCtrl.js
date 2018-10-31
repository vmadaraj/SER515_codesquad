angular.module('userController', [])

.controller('regCtrl', function() {
    
    this.regUser = function(regData) {
        console.log('testing new  Button');
        console.log(this.regData);
        $http.post('/api/users', this.regData);
    };  
});