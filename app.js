var db = require("./db_connect.js");
var tweet = require("./tweet.js");
var express=require("express");
var bodyParser = require('body-parser')
var app=express();
var http=require('http');
var path = require('path');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function(req,res){

	res.sendFile('index.html', { root: path.join(__dirname) });

});

app.post('/', function (req, res) {


  db.dbLookup(req.body.username.toUpperCase(),res,req,tweet);


  



});

app.listen(3000);
