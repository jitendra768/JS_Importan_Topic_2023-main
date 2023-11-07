// 💡 Destructuring
// Destructuring is a quick way to get values out of objects and arrays.
//  For example, you can extract values and assign them to variables with a single line of code.

const persion = {
    name: "Abhishek Kumar",
    age: 25,
    address: 'Lucknow'
}

const {name, age, address} = persion;
console.log(name, age, address);


const color =['red', 'green', 'blue'];
const [first, second, third] = color;
console.log(first, second, third);


// 🔒 Block Scoping
// You can use block scoping to declare variables that are only available within a specific block of code. 
// There are two ways to declare variables in JavaScript: var and let.

// The var keyword declares a global or function-scoped variable, which means it can be accessed from anywhere within the same function.
//  On the other hand, the let keyword declares a variable that is block scoped,
//  which means that it can only be accessed within the same block of code.

if(true){
    let msg = "Hello World";
    console.log(msg);
}
// console.log(msg);


// 🚗 Spread Operator
// Spreading the values of an array or object into a new array or object is possible with the spread operator.
//  It's a quick way to combine arrays or objects or to turn an array-like object into a proper array.

// Here's an example of how to combine two arrays using the spread operator:

const first1 = [2,4,5,6];
const second2 = [7,8,9,0];

const combine = [...first1, ...second2];
console.log(combine);


// Here's an example of how to use the spread operator to transform an array-like object into a real array:

const arrayLike = {
    0: 'one',
    1: 'two',
    2: 'three'
  };
//   const realArray = [...arrayLike];
// console.log(realArray);  



// 🔮 Template Literals
// String literals that allow you to embed expressions within your strings are known as template literals.
//  Instead of quotes (' or "), they are defined with the backtick (`) character.

const name3 = 'Amit Kummar';
const age4 = 34;

const message = `Hello my name is ${name3} my age is ${age4}`;
console.log(message);

// 💾 Arrow Functions
// In JavaScript, arrow functions are a shorthand syntax for writing anonymous functions.
//  They enable you to write code that is shorter, more concise, and more readable.

const numbers = [1, 2, 3, 4, 5];

const square = number => number * number;

const squares = numbers.map(square);

console.log(squares);