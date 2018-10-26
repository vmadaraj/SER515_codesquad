var Flight = require('../models/flight');



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
return router;
}