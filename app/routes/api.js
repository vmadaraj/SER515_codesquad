var Flight = require('../models/flight');
var User = require('../models/user');
var jsonWebToken = require('jsonwebtoken');
var secret = 'tokenTest';

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
        res.json({success : false, message : 'Please provide the username, password and email'});
    }
    else {
        user.save(function(err){
            if (err) {
                res.json({success : true, message : 'UserName or email already exists!!'});
            }
            else {
                res.json({success : true, message : 'user created'});
            }
        });
    }
});
router.post('/authenticateFlights',function(req,res,$http){
    console.log(req.body);
    Flight.find({source:req.body.source,destination:req.body.destination,date :req.body.departDate}).select('flightID source destination date fare').exec(function(err,dflights){
        console.log(dflights);
        if(!dflights){
            res.json({success:false, message: 'Could not find flights'})
        }
        else{
            res.json(dflights)
            console.log(dflights);
            var fs = require('fs');
            fs.writeFile('front-end/resources/JSON/departFlights.JSON',JSON.stringify (dflights), function(err, data){
                            if (err) console.log(err);
                           // console.log("Successfully Written to File.");
                         });
            }

    });
  });

    router.post('/authenticate', function(req, res) {
        if (req.body.username == null || req.body.username == '' || req.body.password  == null || req.body.password == '') {
            res.json({success : false, message : 'Please provide Valid username and password'});
        }
        else {
            User.findOne({ username : req.body.username}).select('email username password').exec(function(err, user) {
                if (err) throw err;

                if (!user) {
                    res.json({success : false, message : 'Could not authenticate user'});
                }
                else if (user) {
                    if (req.body.password != null){
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
                        var token = jsonWebToken.sign({ username : user.username, email : user.email }, secret, {expiresIn : '24h'});
                        res.json({success : true, message : 'User authenticated!', token : token});
                    }
                }
            });
        }
    });

    router.use(function(req, res, next){
        var token = req.body.token || req.body.query || req.headers['x-access-token'];
        if (token) {
            jsonWebToken.verify(token, secret, function(err, decoded){
                if (err) {
                    res.json({success : false, message : "Token invalid"});
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            res.json({success : false, message : "No token Provided"})
        }

    });

    router.post('/me', function(req, res){
        res.send(req.decoded);

    });


// router.post('/authenticateFlightReturn', function(req, res) {
//     console.log(req.body)
// });
  return router;
}
