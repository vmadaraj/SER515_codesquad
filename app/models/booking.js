var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookingSchema = new Schema({
    bookingid:{type:String},
    firstName:{type:String},
    lastName: {type:String},
    email:{type:String},
    phone :{type:String},
    gender :{type:String},
    Isactive :{type:String}

});

module.exports= mongoose.model('Booking',BookingSchema);
