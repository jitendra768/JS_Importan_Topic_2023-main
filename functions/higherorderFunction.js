// A higher order function is a function that takes one or more functions as arguments, or returns a function as its result.
// There are several different types of higher order functions like map and reduce.

function callbackFunction() {
  console.log("I am  a callback function");
}

function higherOrderFunction(func) {
  console.log("I am higher order function");
  func();
}

higherOrderFunction(callbackFunction);

// example-1

let radius = [1, 2, 3];
const calculateArea = (radius) => {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};

const calculateDiameter = (radius) => {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * radius[i]);
  }
  return output;
};

console.log(calculateArea(radius));
console.log(calculateDiameter(radius));

// So, let's see how we can write the same code using HOFs:

// example-2
// logic to clculate area
const area = function (radius) {
  return Math.PI * radius * radius;
};

// logic to calculate diameter
const diameter = function (radius) {
  return 2 * radius;
};

const circumeference = function(radius){
    return 2 * Math.PI * radius;
}

// a reusable function to calculate area, diameter, etc
const calculate = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(calculate(radius, area));
console.log(calculate(radius, diameter));
console.log(calculate(radius, circumeference));
