//Dependencies
var express = require('express');
var router = express.Router();

//Models
var Product = require('../models/product');

//Routes

Product.methods(['get', 'put', 'post', 'delete' ]);
Product.register(router, '/products');

router.get('/basics', function(req, res){
  res.send('This is a Get');
});

router.post('/basics', function(req, res){
  res.send('This is a Post');
});

router.put('/basics', function(req, res){
  res.send('This is a Put');
});

router.delete('/basics', function(req,res){
  res.send('This is a Delete');
});
//Test for the initial setup without models
/*router.get('/products', function(req, res){
  res.send('API is working');
});*/

//Return Router
module.exports = router;
