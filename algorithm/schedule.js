//Dependencies
var express = require('express');
var router = express.Router();

var test = function(){
  return 5+3;
};

var requestTime = function (req, res, next) {
  //req.requestTime = getJSON();
  req.requestTime = test();
  //req.requestTime = Date.now();
  next();
};

router.use(requestTime);
//router.use(getJSON);

//Routes
router.get('/', function(req, res){
  var responseText = 'Hello World!';
  responseText += 'Requested at: ' + req.requestTime + '';
  res.send(responseText);
  //res.send(req.requestTime);
});

//Return Router
module.exports = router;
