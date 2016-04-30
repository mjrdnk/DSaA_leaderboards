var express = require('express');
var fs = require('fs');

var app = express();

app.use(express.static('public'));

var students;
fs.readFile('./dsa.json', 'utf8', function (err, data) {
  if (err) throw err;
  students = JSON.parse(data);
  console.log(students);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});