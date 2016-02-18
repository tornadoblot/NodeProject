/**
 * Created by Sunrin on 2016-02-18.
 */
//var http = require('http');
//var express = require('express');
//
//var app = express();
//
//app.use(function(req, res){
//    res.writeHead(200, {'Content-Type': 'text/html'});
//    res.end('<h1>Helldo</h1>');
//});
//
//http.createServer(app).listen(3000, function(){
//    console.log('daklsdfasd');
//});

//var http = require('http');
//var express = require('express');
//var app = express();
//
//app.use(function(req, res){
//    var output = [];
//    for(var i = 0; i<3; i++){
//        output.push({
//            count : i,
//            name: 'name-'+ i
//        });
//    }
//
//    res.send(output);
//});
//
//http.createServer(app).listen(3000, function(){
//    console.log('Server RUNNING!');
//});

//var http = require('http');
//var express = require('express');
//var app = express();
//
//app.use(function(req, res){
//    var agent = req.header('User-Agent');
//    console.log(req.headers);
//    console.log(agent);
//    res.send(200);
//});
//
//http.createServer(app).listen(3000, function(){
//    console.log('asdfjalsdjfla');
//});

//var http = require('http');
//var express = require('express');
//var app = express();
//
//app.use(function(req, res){
//    var agent= req.header('User-Agent');
//    if(agent.toLowerCase().match(/chrome/)){
//        res.send('안녕크롬');
//    }
//    else{
//        res.send('안녕누구');
//    }
//});
//
//http.createServer(app).listen(3000, function(){
//    console.log('asdfa');
//});

//var http = require('http');
//var express = require('express');
//var app = express();
//
//app.use(function(req, res){
//    var name = req.param('name');
//    var region = req.param('region');
//    res.send(name + '-' + region);
//});
//
//http.createServer(app).listen(3000, function(){
//    console.log('Ohayo');
//});

//var http = require('http');
//var express = require('express');
//var app = express();
//
//app.use(function(req, res, next){
//    req.number = 52;
//    res.number = 273;
//    next();
//});
//
//app.use(function(req, res, next){
//    res.send(req.number + ' : ' + res.number);
//});
//
//http.createServer(app).listen(3000, function(){
//    console.log('으헤에헤엫엫ㅇ');
//});

//var http = require('http');
//var express = require('express');
//var morgan = require('morgan');
//var app = express();
//
//app.use(morgan());
//app.use(express.static('HUA'));
//후아 폴더를 루트화
//app.use(function(req, res){
//    console.log("three");
//    res.writeHead(200, {'Content-Type' : 'text/html'});
//    res.end('<img src="/cat.jpg" width="50%" />');
//});
//
//http.createServer(app).listen(3000, function(){
//    console.log('흐에엥ㅇ');
//});

var http = require('http');
var express = require('express');
var morgan = require('morgan');
var app = express();

app.use(morgan());
//app.use(app.router);
app.use(express.static('HUA'));
app.get('/a', function(req, res){
    res.send('<a href="/b">GOTO B</a>');
});
app.get('/b', function(req, res){
    res.send('<a href="/a">GOTO A</a>');
});
http.createServer(app).listen(3000,function(){
    console.log("응하앟ㅇㅎㅇ");
});