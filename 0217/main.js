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

var fs = require('fs');
var data = 'Hello World..!';

fs.writeFile('TextFileOtherWrite.txt', data, 'utf8', function(error){
    console.log('WRITE FILE ASYNC COMPLETE');
});
//예외처리 하는법
//에러가 먼저오기 때문에 노상관
//이래서 트라이캐치 안씀

fs.writeFileSync('TextFileOtherWriteSync.txt', data, 'utf8');
//비동기로 쓰는중
console.log('WIRTE FILE SYNC COMPLETE');

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