// closure

// function x(){
//   var a= 7;
//   function y(){
//     console.log(a);
//   }
//   y();
// }
// x();


// as a parameter pass function

// function x(){
//   var a= 7;
 
//   y();
// }
// x( function y(){
//   console.log(a);
// });


// also return a function


// function x() {
//   var a = 7;
//   return function y() {
//     console.log(a);
//   }
// }
// const z = x();
// console.log(z);   // return y function
// z();

// interview question

// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   a=100;
//   return y;
// }
// const z = x();
// console.log(z);   // return y function
// z();

function z() {
  var b = 20;
  function x() {
    var a = 3;
    function y() {
      console.log(b, a);
    }
    y();
  }
  x();
}
z();

//test
