function x(){
    var a=9;
    return function y(){
        console.log(a);
    }
}

var res = x();
console.log(res);
res();

add();
b();
function add(){
    console.log('a called')
}


var b = function(){
    console.log('hello')
}

