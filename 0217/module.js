/**
 * Created by Sunrin on 2016-02-17.
 */
//console.log('filename:', __filename);
//console.log('dirname:', __dirname);

//console.time('alpha');
//
//var output = 1;
//for(var i = 1; i<= 10; i++) {
//    output *= i;
//}
//
//console.timeEnd('alpha');
//시간값 구하기

//exports.abs= function(number){
//    if(0< number){
//        return number;
//    }
//    else{
//        return-number;
//    }
//};
//
//exports.circleArea = function(radius){
//    return radius*radius*Math.PI;
//};
//모듈만들기1

//var custom = newprocess.EventEmitter();
//custom.on('tick', function(){
//    console.log('이벤트를 실행합니다.');
//})
//custom.emit('tick');
//객체생성 예

//exports.timer= new process.EventEmitter();
//
//setInterval(function (){
//    exports.timer.emit('tick');
//},1000);
//객체 생성 및 연결하는중