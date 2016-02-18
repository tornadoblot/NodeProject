/**
 * Created by Sunrin on 2016-02-18.
 */
//var http = require('http');
//http.createServer(function(req, res){
//    res.writeHead(200, {'Content-Type': 'text/plain'});
//    res.end('Heelo,');
//}).listen(300);
//console.log('서버안녕');
////아침 연습으로 서버열기

//var http= require('http');
//
//http.createServer(function(req, res){
//    var date = new Date();
//    date.setDate(date.getDate()+7);
//    res.writeHead(200,{
//        'Content-Type': 'text/html',
//        'Set-Cookie':[
//            'breakfaste = toast; Expires = '+ date.toUTCString(),
//            'dinner = chicken'
//        ]
//    });
//    res.end('<h1>' + req.headers.cookie + '</h1>');
//}).listen(3000,function(){
//    console.log('serVer RUnasdfa');
//});
////쿠키사용해보기

//var http = require('http');
//
//http.createServer(function(req, res) {
//    res.writeHead(302, {'Location': 'http://www.github.com'});
//    res.end();
//}).listen(3000, function() {
//    console.log("켜저라!");
//});
////오늘의 리퀘스트 해주기ㅣ

//var http= require('http');
//var fs= require('fs');
//var url= require('url');
//
//http.createServer(function(req,res){
//    var pathname= url.parse(req.url).pathname;
//
//    if(pathname == '/'){
//        fs.readFile('Index.html', function(error, data){
//            res.writeHead(200, {'Content-Type': 'text/html'});
//            res.end(data);
//        })
//    }
//    else if(pathname == '/OtherPage'){
//        fs.readFile('OtherPage.html', function(error, data){
//            res.writeHead(200, {'Content-Type': 'text/html'});
//            res.end(data);
//        });
//    }
//}).listen(3000,function() {
//    console.log('켜져라!');
//});

//var http= require('http');
//var url= require('url');
//
//http.createServer(function(req, res){
//    var query= url.parse(req.url, true).query;
//
//    res.writeHead(200, {'Content-Type': 'text/html'});
//    res.end('<h1>' + JSON.stringify(query) + '</h1>');
//}).listen(3000, function(){
//    console.log('s므알ㄴㄹ');
//});

//var http= require('http');
//
//http.createServer(function(req, res){
//    req.on('data', function(data){
//        console.log('POST Data:', data);
//    });
//}).listen(3000, function(){
//    console.log('되닝');
//});

//var http= require('http');
//var fs= require('fs');
//
//http.createServer(function(req, res){
//    if(req.method == 'GET'){
//        fs.readFile('HTMLPage.html', function(error,data){
//            res.writeHead(200, {'Content-Type': 'text/html'});
//            res.end();
//        });
//    }
//    else if(req.method=='POST'){
//        req.on('data', function(data){
//            res.writeHead(200, {'Content-Type': 'text/html'});
//            res.end('<h1>' + data+ '</h1>');
//        });
//    }
//}).listen(3000, function(){
//    console.log('asdf');
//});

//var http = require('http');
//http.createServer(function(req, res){
//    var cookie = req.headers.cookie;
//
//    res.writeHead(200, {
//        'Content-Type': 'text/html',
//        'Set-Cookie': ['name = mylko', 'region = Seoul']
//    });
//    res.end('<h1>' + JSON.stringify(cookie) + '</h1>');
//}).listen(3000, function(){
//    console.log('asdfa');
//});

//var http = require('http');
//http.createServer(function(req, res){
//    var cookie = req.headers.cookie;
//    cookie= cookie.split(';').map(function(element){
//        var element = element.split('=');
//        return{
//            key: element[0],
//            value: element[1]
//        };
//    });
//
//    res.writeHead(200, {
//        'Content-Type': 'text/html',
//        'Set-Cookie': ['name = mylko', 'region = Seoul']
//    });
//    res.end('<h1>' + JSON.stringify(cookie) + '</h1>');
//}).listen(3000, function(){
//    console.log('asdfa');
//});