//Function to connect through http and retrieve a web page using GET method
/*var http = require('http');
var getJSON = function(callback){
  return http.get({
    host: 'localhost',
    path: '/api/products'
    //method: 'GET', //POST,PUT,DELETE etc
    //port: 3000,
    //headers: {}
  }, function(response){
    var body = '';
    response.on('data',function(d){
      body +=d;
    });
    response.on('end', function(){
      var parsed = JSON.parse(body);
      callback({
        name: parsed.name
      })
    });
  });
};
*/
//Read and parse JSON
