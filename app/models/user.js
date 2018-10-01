var mongoose= require('mongoose');
var Schema=mongoose.Schema;

var UserSchema= new Schema({
    username:{type: String, required:true, unique:true},
    passwprd:{type: String, required: true},
    email:{type:String, required:true, lowercase:true}
})