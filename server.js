var express = require('express');
var vue = require('vue');
var fs = require('fs');
var requirejs = require('requirejs');

var app = express();

app.use(express.static('/'))
   .use(express.static(__dirname + '/public'));

var data;
fs.readFile('./dsa.json', 'utf8', (err, data) => {
  if (err) throw err;
  exports.data = data;
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});