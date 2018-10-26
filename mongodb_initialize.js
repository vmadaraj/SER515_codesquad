var port = process.env.PORT || 8080;

app.use(express.static(__dirname+ '/front-end'));
var mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/SER_515', function(err){
    if(err){
        console.log('Not connected');
    }
    else{
        console.log("Connected to MONGODB");
    }
});

use test
db.createUser(
  {
    user: "behnaz",
    pwd: "behnaz123",
    roles: [ { role: "readWrite", db: "test" }]
  }
)
