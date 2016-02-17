/**
 * Created by Sunrin on 2016-02-17.
 */
//var module = require('./module.js');
////require == include
//
//console.log('abs(-273) = %d', module.abs(-273));
//console.log('circleArea(3) = %d', module.circleArea(3));
// 모듈만든거 다른 파일에서 써보기1

//var fs = require('fs');
//
//var text = fs.readFileSync('textfile.txt', 'utf8');
//console.log(text);
//동기식으로 읽기

//var fs = require('fs');
//var data = 'Hello World..!';
//
//fs.writeFile('TextFileOtherWrite.txt', data, 'utf8', function(error){
//    console.log('WRITE FILE ASYNC COMPLETE');
//});
////예외처리 하는법
////에러가 먼저오기 때문에 노상관
////이래서 트라이캐치 안씀
//
//fs.writeFileSync('TextFileOtherWriteSync.txt', data, 'utf8');
////비동기로 쓰는중
//console.log('WIRTE FILE SYNC COMPLETE');
//솔직히 하자면 파일 입출력 ㅇㅈ? ㅇㅇㅈ

//var fs = require('fs');
//
//fs.readFile('textfile.txt', 'utf8', function(error, data){
//    if(error){
//        console.log(error);
//    }
//    else {
//        console.log(data);
//    }
//});
//
//fs.writeFile('textfile.txt', 'Hello World..!', 'utf8', function(error){
//    if(error){
//        console.log(error);
//    }
//    else{
//        console.log('FILE WRITE COMPLETE');
//    }
//});
////비동기 처리하는 메서드의 예외처리다요

//var ex = require('./module');
//
//ex.timer.on('tick', function(){
//    console.log('으아아앙ㅇ');
//});
///이벤트 에미터 여기서 연결했지롱

//var http = require('http');
//var server = http.createServer();
//
//server.listen(3000, function(){
//    console.log('Server Running at http://127.0.0.1:3000');
//});
//
//setInterval(function(){
//    server.close();
//},10000);
////서버 열었다가 닫기

//var http= require('http');
//http.createServer(function(req,res){
//    res.writeHead(200, {'Content-Type': 'text/plain'});
//    //text/html 하면 html 파일로, css면 css파일로
//    res.end('hello World\n');
//}).listen(3000);
//console.log('서버구현 성공!!!');
////서버열었당

//var http= require('http');
//http.createServer(function(req,res){
//    res.writeHead(200, {'Content-Type': 'text/html'});
//    //text/html 하면 html 파일로, css면 css파일로
//    res.end('<b><H1>hello World</H1></b>');
//}).listen(3000);
//console.log('서버구현 성공!!!');
////서버열었당