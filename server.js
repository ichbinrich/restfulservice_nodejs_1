//Sirve
//Dependencies
var express = require ('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//MongoDB Connection
mongoose.connect('mongodb://localhost/rest_test');

//express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes
app.use('/api', require('./routes/api'));
//Basic code for get and send
/*app.get('/', function(req, res){
  res.send('working');
});*/

//Serving Static Files
app.use('/json', express.static('jsondummies'));
//app.use('/test', require('./extras'));

app.use('/optimize', require('./algorithm/schedule'));

//Server
app.listen(3000);
console.log("API is running");
