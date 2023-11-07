// // Currying is a process in functional programming in which we can transform a 
// // function with multiple arguments into a sequence of nesting functions. 
// // It returns a new function that expects the next argument inline.

// // In other words, when a function, instead of taking all arguments at one time,
// //  takes the first one and return a new function that takes the second one and returns
// //   a new function which takes the third one, and so forth, until all arguments have been fulfilled.


// //Normal fumction

// function num(a,b,c){
//     return a+b+c;
// }
// const sum = num(3,4,5);
// console.log(sum);

// //Currying function

// function num1(a){
//     return function num2(b){
//         return function num3(c){
//             return a+b+c;
//         };
//     };
// }

// console.log(num1(3)(4)(8));

// // Normal function

// function calVolume(length,breadth,height){
//     return length * breadth * height;
// };

// console.log (calVolume(4,5,7));

// // Currying function

// function volume(length){
//     return function(breadth){
//         return function(height){
//             return length * breadth * height; 
//         };
//     };
// };

// console.log(volume(2)(4)(5));

function sum(a){
    var a = 30;
    function c(){
        
    }
}