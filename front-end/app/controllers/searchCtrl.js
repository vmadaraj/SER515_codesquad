angular.module('flightController',[]).config(function(){
    console.log('testing ctrl');
})
.controller("TestCtrl1", function($scope, $location) {
   
})

.controller("searchController", function($scope, $location) {
    console.log('testing s');
   
    $scope.goto = function(page) {
        console.log(page);
        $location.path(page);
    };
})


