// function expression

let x = function (x, y) {
  return x * y;
};

const res = x(4, 5);
console.log(res);

// using arrow function

let z = (x, y) => x * y;
const res2 = x(4, 5);
console.log(res2);

// Arrow Function with No Argument

let greet = () => console.log("Hello");
greet();

// Arrow Function with One Argument

let welcome = x => console.log(x);
welcome("Hello");

// Arrow Function as an Expression

let age = 5;

const welcome2 = (age<18)?
()=>console.log("Baby"):
()=>console.log("Adult");

welcome2();
