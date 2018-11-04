angular.module('flightService',[])
.factory('flightFactory',function($http){
    flightData = {}
    function set(data){
        flightData= data;
    }
    function get(){
        return flightData;
    }

    return{
        set:set,
        get:get
    }
})