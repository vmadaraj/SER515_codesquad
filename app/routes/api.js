var Flight = require('../models/flight');
var User = require('../models/user');

module.exports =function(router){

router.post('/searchFlightOn',function(req,res){
    var flight = new Flight();
    flight.flightID = req.body.flightID
    flight.source = req.body.source;
    flight.destination = req.body.destination;
    flight.date =req.body.date;
    flight.fare = req.body.fare;
    flight.save(function(err){
        if(err)
        res.send(err);
        else
        res.send('Flight created');


    });
});
// http://localtest:8080/users
router.post('/users', function(req, res) {
    var user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.email = req.body.email;

    if (user.username == null || user.username == '' || user.password == null || user.password == '' || user.email == null || user.email == '') {
        res.send('Please provide the username, password and email')
    }
    else {
        user.save(function(err){
            if (err) {
                res.send('UserName or Email already exists');
            }
            else {
                res.send('user created');
            }
        });
    }
});
router.post('/authenticateFlights',function(req,res,$http){
    Flight.find({source:req.body.source, destination:req.body.destination,date:req.body.departDate}).select('flightID source destination date fare').exec(function(err,dflights){
        if(err) throw err;
        console.log('flight data')

        if(!dflights){
            res.json({success:false, message: 'Could not find flights'})
        }
        else{
                console.log(dflights)
                res.json(dflights)
                var fs = require('fs');

                var data = "New File Contents";
                //console.log(res)
               // angular.json(flights)
                fs.writeFile('front-end/resources/JSON/departFlights.JSON',JSON.stringify (dflights), function(err, data){
                if (err) console.log(err);
               // console.log("Successfully Written to File.");
});


        }
        Flight.find({source:req.body.destination, destination:req.body.source,date:req.body.returnDate}).select('flightID source destination date fare').exec(function(err,rflights){
            console.log("hey")
            res.json(rflights)

            fs.writeFile('front-end/resources/JSON/returnFlights.JSON',JSON.stringify (rflights), function(err, data){
                if (err) console.log(err);
               // console.log("Successfully Written to File.");
});
            });
    });



});

router.post('/authenticate', function(req, res) {
    User.findOne({ username : req.body.username}).select('email username password').exec(function(err, user) {
        if (err) throw err;

        if (!user) {
            res.json({success : false, message : 'Could not authenticate user'});
        }
        else if (user) {
           if (req.body.password){
               var validPassword = user.comparePassword(req.body.password);
           }
           else {
               res.json({success : false, message : "No password Provided"});
           }
           var validPassword =  user.comparePassword(req.body.password);
           if (!validPassword) {
               res.json({success : false, message : "Could not authenticate password"});
           }
           else {
               res.json({success : true, message : 'User authenticate'});
           }
        }

    });
});

router.post('/authenticateFlightReturn', function(req, res) {
    console.log(req.body)
});
return router;
}

