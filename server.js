var express= require('express');
var app= express();
var port = process.env.PORT || 8080;
var morgan = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose= require('mongoose');
var router = express.Router();
var appRoutes = require('./app/routes/api')(router);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(__dirname+ '/front-end'));
app.use('/api',appRoutes);

mongoose.connect('mongodb://localhost:27017/SER_515', function(err){
    if(err){
        console.log('Not connected');
    }
    else{
        console.log("Connected to MONGODB");
    }
});




app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+ '/front-end/app/views/index.html'));
})

app.get('/contacts', function(req, res){
    res.sendFile(path.join(__dirname+ '/front-end/app/views/contacts.html'));
})

app.get('/login', function(req, res){
    res.sendFile(path.join(__dirname+ '/front-end/app/views/pages/login.html'));
});

app.get('/about', function(req, res){
    res.sendFile(path.join(__dirname+ '/front-end/app/views/pages/about.html'));
});

app.get('/userProfile', function(req, res){
    res.sendFile(path.join(__dirname+ '/front-end/app/views/pages/userProfile.html'));
});

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname+ '/front-end/app/views/index.html'));
})

 

app.listen(port || 8080,function(){
    console.log('server running on port '+ port );
});
