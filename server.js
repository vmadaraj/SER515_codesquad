var express= require('express');
var app= express();
var port = process.env.PORT || 8080;
var morgan = require('morgan');
var path= require('path');


app.use(morgan('dev'));
app.use(express.static(__dirname+ '/front-end'));
var mongoose= require('mongoose');
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

<<<<<<< HEAD

app.get('/register', function(req, res){
    res.sendFile(path.join(__dirname+ '/front-end/app/views/pages/register.html'));
});

app.get('/booking', function(req, res){
    res.sendFile(path.join(__dirname+ '/front-end/app/views/pages/booking.html'));
})


=======
app.get('/editprofile', function(req, res){
    res.sendFile(path.join(__dirname+ '/front-end/app/views/pages/editprofile.html'));
});

>>>>>>> 55709069f6634b30bc92c993cf531932311668cd
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname+ '/front-end/app/views/index.html'));
});


<<<<<<< HEAD
=======
app.get('/register', function(req, res){
    res.sendFile(path.join(__dirname+ '/front-end/app/views/pages/register.html'));
});
 
>>>>>>> 55709069f6634b30bc92c993cf531932311668cd

app.listen(port || 8080,function(){
    console.log('server running on port '+ port );
});

