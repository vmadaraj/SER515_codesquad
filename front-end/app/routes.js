// 'use strict';
// var SabreDevStudio = require('sabre-dev-studio');
// var sabreDevStudio = new SabreDevStudio({
//   client_id: 'V1:odq3eobh4jli2est:DEVCENTER:EXT',
//   client_secret: '84MJmlDu',
//   uri:  'https://api.test.sabre.com'
// });
// var options = {};
//
// app.get('/api/v1/cities', function(req, res) {
//   sabreCall('/v1/lists/supported/cities', res);
// });
//
// app.get('/api/v1/flights', function(req,res) {
//   sabreCall('/v1/shop/flights', res);
// });
//
// function sabreCall(q, res) {
//   sabreDevStudio.get(q, options, function(err, data) {
//     response(res, err, data);
//   });
// }
// function response(res, err, data) {
//   if(err) {
//     res.status(200).send({
//       'status' : false,
//       'message' : 'Error',
//       'info' : data
//     });
//   }
// }

angular.module('airlineApp', ['ngRoute'])
.config(function($routeProvider)
{
    $routeProvider
    .when('/home',{
        templateUrl: 'app/views/index.html',
        controller: 'MainCtrl'
    });


    // $routeProvider .when('/login', {
    //     templateUrl: 'app/views/pages/login.html'
    // });

    // $routeProvider .when('/about',{
    //     templateUrl: 'app/views/pages/about.html'
    // });
});
