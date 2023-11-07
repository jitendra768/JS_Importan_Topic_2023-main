// 1. function Declaration and function statement


// function square(num){
//  return num*num;
// }

// 2. function expression

// const square = function (num){
//     return num * num;
// }

// console.log(square(5));

// 3. First Class function

// function square(num){
//     return num * num
// }

// function dispalySquare(fn){
//     console.log('square is'+ fn(5))
// }

// dispalySquare(square);

// 4. IIFE(Immediately Invoked Function Expression)

// (function square(num){
//     console.log(num * num);
// })(5);

// (function (x){
// return (function(y){
//     console.log(x);
// })(2)
// })(1)

//5. function scope 

// const num1 = 20;
// const num2 = 3;
// const name = "Amit Kumar";

// function mulitply(){
//     console.log( num1 * num2);
// }

// mulitply();

// function getScore(){
//     const num1 = 2;
//     const num2 = 3;
//     function add(){
//         console.log(`${name} scored ${num1+num2}`)
//     }
//     return add()
// }

// getScore();