var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FlightSchema = new Schema({
source: {type:String},
destination:{type:String},
departDate :{type:String},
returnDate :{type:String}
});

module.exports= mongoose.model('Flight',FlightSchema);