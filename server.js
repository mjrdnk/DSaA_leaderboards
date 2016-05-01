var express = require('express');
var vue = require('vue');
var fs = require('fs');
var requirejs = require('requirejs');

var app = express();

app.use(express.static('/'))
   .use(express.static(__dirname + '/public'));

var data = fs.readFileSync('./dsa.json', 'utf8');

app.get('/json', function(req, res){
  res.send(data);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});