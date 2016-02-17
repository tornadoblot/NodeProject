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

exports.abs= function(number){
    if(0< number){
        return number;
    }
    else{
        return-number;
    }
};

exports.circleArea = function(radius){
    return radius*radius*Math.PI;
};