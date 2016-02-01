//Dependencies
var express = require('express');
var router = express.Router();

//Models
var Product = require('../models/product');

//Routes

Product.methods(['get', 'put', 'post', 'delete' ]);
Product.register(router, '/products');

//Test for the initial setup without models
/*router.get('/products', function(req, res){
  res.send('API is working');
});*/

//Return Router
module.exports = router;
