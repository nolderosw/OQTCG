var express = require('express');
var app = express();
var http = require('http');
var path = require('path');
var port = process.env.PORT || 5000;

app.set('port', process.env.PORT || 5000);
app.listen(port);

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res){
	res.render('index');
});



