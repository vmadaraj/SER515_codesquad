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
return router;
}

