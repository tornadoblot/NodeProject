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

var http= require('http');

http.createServer(function(req, res){
    var date = new Date();
    date.setDate(date.getDate()+7);
    res.writeHead(200,{
        'Content-Type': 'text/html',
        'Set-Cookie':[
            'breakfaste = toast; Expires = '+ date.toUTCString(),
            'dinner = chicken'
        ]
    });
    res.end('<h1>' + req.headers.cookie + '</h1>');
}).listen(3000,function(){
    console.log('serVer RUnasdfa');
});
//쿠키사용해보기