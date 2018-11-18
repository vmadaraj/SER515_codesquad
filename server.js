var express= require('express');
var app= express();
var port = process.env.PORT || 8080;
var morgan = require('morgan');
var path= require('path');
var mongoose= require('mongoose');
var bodyParser= require('body-parser');
var router = express.Router();
var appRoutes = require('./app/routes/api')(router);
var Flight = require('./app/models/flight')

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(__dirname+ '/front-end'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',appRoutes);

module.exports = {



db : mongoose.connect('mongodb://shirisha:password_1@ds249233.mlab.com:49233/airline', function(err, database){
    if(err){
        console.log('Not connected');
    }
    else{
        console.log("Connected to MONGODB");
        return database;
    }
})
};

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+ '/front-end/app/views/index.html'));
});

app.get('/contacts', function(req, res){
    res.sendFile(path.join(__dirname+ '/front-end/app/views/contacts.html'));
});

app.get('/login', function(req, res){
    res.sendFile(path.join(__dirname+ '/front-end/app/views/pages/login.html'));
});

app.get('/about', function(req, res){
    res.sendFile(path.join(__dirname+ '/front-end/app/views/pages/about.html'));
});


app.get('/flightDetails', function(req, res){
    res.sendFile(path.join(__dirname+ '/front-end/app/views/pages/flightDetails.html'));

});

app.get('/userProfile', function(req, res){
    res.sendFile(path.join(__dirname+ '/front-end/app/views/pages/userProfile.html'));
});

app.get('/register', function(req, res){
    res.sendFile(path.join(__dirname+ '/front-end/app/views/pages/register.html'));
});

app.get('/booking', function(req, res){
    res.sendFile(path.join(__dirname+ '/front-end/app/views/pages/booking.html'));
});
app.get('/bookingDetails', function(req, res){
    res.sendFile(path.join(__dirname+ '/front-end/app/views/pages/bookingDetails.html'));
});
app.get('/logout', function(req, res){
    res.sendFile(path.join(__dirname+ '/front-end/app/views/pages/logout.html'));
});

app.get('/bookingHistory', function(req, res){
    res.sendFile(path.join(__dirname+ '/front-end/app/views/pages/bookingHistory.html'));
});

app.get('/cancelBooking', function(req, res){
    res.sendFile(path.join(__dirname+ '/front-end/app/views/pages/cancelBooking.html'));
});


app.get('*', function(req, res){
    res.sendFile(path.join(__dirname+ '/front-end/app/views/index.html'));
});



app.listen(port || 8080,function(){
    console.log('server running on port '+ port );
});

// var SabreDevStudio = require('sabre-dev-studio');
// var sabre_dev_studio = new SabreDevStudio({
//   client_id:     'V1:f2jll8xn1qn0k1ah:DEVCENTER:EXT',
//   client_secret: 'iNNi1Wo2',
//   //uri:           'https://api.test.sabre.com'
//   uri: 'https://api.havail.sabre.com'
// });
// var options = {};
// var callback = function(error, data) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(JSON.stringify(JSON.parse(data)));
//   }
// };
// console.log(sabre_dev_studio.get('v1/shop/flights?origin=ATL&destination=LAS&departuredate=2016-08-13&returndate=2016-08-15&limit=1&enabletagging=true HTTP/1.1', options, callback));
// //sabre_dev_studio.get('/v1/shop/flights/fares?origin=NYC&departuredate=2015-05-25&returndate=2015-05-30&maxfare=200', options, callback);
