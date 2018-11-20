var Flight = require('../models/flight');
var User = require('../models/user');
var Booking = require('../models/booking');
var q= require('q');
var jsonWebToken = require('jsonwebtoken');
var secret = 'tokenTest';
var mongoose= require('mongoose');

module.exports =function(router){
// app.use(constant.USER_PATH, router);

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

router.post('/bookingFlight',function(req,res){
    var booking = new Booking();
    booking.bookingid = req.body.bookingid
    booking.firstName = req.body.firstName;
    booking.lastName = req.body.lastName;
    booking.email =req.body.email;
    booking.phone = req.body.phone;
    booking.gender = req.body.gender;
    booking.Isactive = req.body.Isactive;
    booking.seat = req.body.seat;
    var fs = require('fs');
            fs.writeFile('front-end/resources/JSON/bookingData.JSON',JSON.stringify (booking), function(err, data){
                            if (err) console.log(err);
                           // console.log("Successfully Written to File.");
                         });
    booking.save(function(err){
        if(err)
        res.send(err);
        else
        res.send('booking');


    });
});

router.post('/bookingIDS',function(req,res){
    console.log("heelloo")
    Booking.find().sort({bookingid:-1}).limit(1).select('bookingid').exec(function(err, bookings) {
        res.json(bookings[0].bookingid)
    });
});

router.put('/bookings/:id/update', function (req, res) {
    console.log("Hellooo   fdsfdsfsdf");

    console.log(req.body);
    // var tempID = mongoose.Types.ObjectID(req.params.id);
    // Booking.findByIdAndUpdate(tempID, { Isactive : "false" }, function (err, booking) {
    //     console.log("Inside func");
    //     if (err) {
    //         console.log("err is triggered");
    //         console.log(err);
    //     }
    //     res.send('Product udpated.');
    // });
    var query = { bookingid: req.body.bookingid };
    Booking.findOneAndUpdate(query, { Isactive : "false" }, {
          sort: {_id: -1},
          upsert: true
        }, (err, result) => {
          if (err) return res.send(err)
        //   res.send(result)
          res.json({success : true, message : 'Booking Cancelled'});
        });
});

//get Booking Details
router.post('/bookings',function(req,res){
    console.log(req.body.email)
    Booking.find({email:req.body.email}).select('bookingid  firstName lastName email phone gender Isactive').exec(function(err, bookings) {
        if (!bookings) {
            res.json({success : false, message : "Couldnot get Bookings"})
        }
        else {
            res.json(bookings);
            console.log(bookings);
            var fs = require('fs');
            fs.writeFile('front-end/resources/JSON/bookingHistory.JSON', JSON.stringify(bookings), function(err, data){
                if (err) console.log(err);
            });
        }
    });
});

router.post('/cancelBookings',function(req,res){
    console.log(req.body.email)
    Booking.find({email:req.body.email, Isactive: "true"}).select('bookingid  firstName lastName email phone gender Isactive').exec(function(err, bookings) {
        if (!bookings) {
            res.json({success : false, message : "Couldnot get Cancel Bookings"})
        }
        else {
            res.json(bookings);
            console.log(bookings);
            var fs = require('fs');
            fs.writeFile('front-end/resources/JSON/cancelBookings.JSON', JSON.stringify(bookings), function(err, data){
                if (err) console.log(err);
            });
        }
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
    var promises = [
        Flight.find({source:req.body.source,destination:req.body.destination,date :req.body.departDate}).select('flightID source destination date fare').exec(),
        Flight.find({source:req.body.destination,destination:req.body.source,date :req.body.returnDate}).select('flightID source destination date fare').exec()
          ];
    q.all(promises).then(function(results){
             var fs = require('fs');
            fs.writeFile('front-end/resources/JSON/departFlights.JSON',JSON.stringify (results[0]), function(err, data){

                            if (err) console.log(err);
                           // console.log("Successfully Written to File.");
                         });
            
            var fs1=require('fs');
            console.log(results[1]);

            fs1.writeFile('front-end/resources/JSON/returnFlights.JSON',JSON.stringify (results[1]), function(err, data){
                if (err) console.log(err);
               // console.log("Successfully Written to File.");
             });
            });
});
   

    // console.log(req.body);
    // var promise = Flight.find({source:req.body.source,destination:req.body.destination,date :req.body.departDate}).select('flightID source destination date fare').exec(
    //     // function(err,dflights){
    //     // console.log(dflights);
    //     // if(!dflights){
    //     //     res.json({success:false, message: 'Could not find flights'})
    //     // }
    //     // else{
    //     //     res.json(dflights)
    //     //     console.log(dflights);
    //     //     var fs = require('fs');
    //     //     fs.writeFile('front-end/resources/JSON/departFlights.JSON',JSON.stringify (dflights), function(err, data){
    //     //                     if (err) console.log(err);
    //     //                    // console.log("Successfully Written to File.");
    //     //                  });
    // //         }

    // // }
    // );
    // promise.then(function(dflights){
    //     console.log(dflights);
       

    // });
    // Flight.find({source:req.body.destination,destination:req.body.source,date :req.body.returnDate}).select('flightID source destination date fare').exec(function(dflights){
    //     console.log(dflights)
    // });


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
