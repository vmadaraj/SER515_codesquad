angular.module('userServices',[])

.factory('User',function($http){
      userFactory={};

      userFactory.create = function(data) {
            return $http.post('/api/users', data);
      }
      return userFactory;
});