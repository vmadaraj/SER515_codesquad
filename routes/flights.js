var express = require('express');
var router = express.Router();

var mongojs = require('mongojs');
var db = mongojs('mongodb://shirisha:Shirisha!1@ds131903.mlab.com:31903/airline',['flights']);

var app = express();

router.get('/flights', function(req, res, next){
    db.flights.find(function(err, flights){
        if(err){
            res.send(err);
        }
        res.json(flights);
    });
});

router.get('/flight/:id', function(req, res, next){
    db.flights.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, flight){
        if(err){
            res.send(err);
        }
        res.json(flight);
    });
});