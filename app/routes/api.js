var Flight = require('../models/flight');
var User = require('../models/user');

module.exports =function(router){

    router.post('/searchFlightOn',function(req,res){
        var flight = new Flight();
        flight.source = req.body.source;
        flight.destination = req.body.destination;
        flight.departDate =req.body.departDate;
        flight.returnDate = req.body.returnDate;
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
                    res.json({success : true, message : 'UserName or Email already exists!!'});
                }
                else {
                    res.json({success : true, message : 'User Created'});
                   
                }
            });
        }
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
                   res.json({success : true, message : 'User authenticated'});
               }
            }
        });
    });
    return router;
}

