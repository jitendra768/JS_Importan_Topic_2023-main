// Spread: Unpacks Elements [];

//Rest : Pack Elements;

// Spread

// Ex Clone Or Copy

// const numbers=[1,2,3];
// console.log(numbers)
// const NewNumbers = [...numbers];
// console.log(NewNumbers);

//Merge

const old=[1,2,3];
const newNum=[1,2,3];
const NewNumber = [...old, ...newNum];
console.log(NewNumber);

//Compose

// const old=[1,2,3];
// const newNum=[1,2,3];
// const compose = [100,...old, ...newNum, 200];
// console.log(compose);

//String

// const Channel = 'codderGyan';
// console.log([...Channel]);

//Object
// Clone Shallow

// const order={
//     id:1,
//     date:'29/03/2023',
//     customerName:'Amit',
//     items:['1','2']
// };

// const newOrder={
//     ...order,
// };
// order.items.push('3');

// console.log(newOrder);

//Merge 2 Object

// const user = {
//     name:'Rakesh',
//     city: 'Noida'
// }

// const address={
//     street:'main street',
// }

// const newUser ={
//     ...user,...address,
// };
// console.log(newUser);

//Rest Parameter

// function sum(num1,num2){
//     return num1+num2;
// };
// console.log(sum(3,4));

// function sum(...numbers){
//     console.log(numbers);
//     let result = 0;
//     for(let num of numbers){
//         result += num;
//     }
//     return result;
// };
// // console.log(sum(3,4,6,8));
// const numbers=[3,4,5,6,8,9,6];
// console.log(sum(...numbers))

// console.log(Math.max(2,4,6,5,2,1));

// function average(...args) {
//   console.log(args);
//   var avg =
//     args.reduce(function (a, b) {
//       return a + b;
//     }, 0) / args.length;
//   return avg;
// }
// console.log("average of numbers is : " + average(1, 2, 3, 4, 5));
// console.log("average of numbers is : " + average(1, 2, 3));
