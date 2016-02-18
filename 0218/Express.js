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

var http = require('http');
var express = require('express');
var app = express();

app.use(function(req, res){
    var output = [];
    for(var i = 0; i<3; i++){
        output.push({
            count : i,
            name: 'name-'+ i
        });
    }

    res.send(output);
});

http.createServer(app).listen(3000, function(){
    console.log('Server RUNNING!');
});