1. // Function Statement Function Declaration

// a();
// b();
function a(params) {
    console.log("a called")
}
// a();

2. // Fuction Expression
var b   = function (){
    console.log('b called');
}
// b();

3. //Anonymous Function 
let c = function (){
    console.log('c called')
}
// c();

// 4. Named Function 

var z = function xyz(){
    console.log('z called')
}
// z();
// xyz();

// 5. Diffrent bt Parameter and Argument 
// 6. First Class Function

var d = function(param){
    // console.log('d called')
    return function xyz(){
        // console.log('xyz called')
    }
}
console.log(d())