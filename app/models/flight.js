var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FlightSchema = new Schema({
flightID:{type:String},
source: {type:String},
destination:{type:String},
date :{type:String},
fare :{type:String}
});

module.exports= mongoose.model('Flight',FlightSchema);