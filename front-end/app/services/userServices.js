angular.module('userServices',[])

.factory('User',function($http){
      userFactory={};

      userFactory.create = function(data) {
        console.log("hit 3")
        console.log(data)

            return $http.post('/api/users', data);
      }
      return userFactory;
});
