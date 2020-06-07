
var express = require('express');
const hostname = 'localhost';
const port = 3000;
var app = express();
app.use(express.static('public'));
app.get('/index.html', function (req, res) {
  // res.sendFile( __dirname + "/" + "index.html" );
})

var server = app.listen(port, function () {
   
   console.log("listening at http://%s:%s", hostname, port)
})