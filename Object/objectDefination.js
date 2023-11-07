// Using an Object Literal

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
person.profession = "SoftwareEngineer";
delete person.eyeColor;
console.log(person);

let txt = "";
for (let x in person) {
  txt += person[x] + " ";
}
console.log(txt);

// This example creates an empty JavaScript object, and then adds 4 properties:

const person1 = {};
person1.name = "Amit";
person1.age = 23;
person1.lastName = "kumar";
console.log(person1);

// Using the JavaScript Keyword new

const person2 = new Object();
person2.firstName = "sachin";
person2.lastName = "shahani";
person2.age = 28;
person2.eyeColor = "black";

console.log(person2);

// Nested Objects

// Values in an object can be another object:

// myObj = {
//   name: "John",
//   age: 30,
//   cars: {
//     car1: "Ford",
//     car2: "BMW",
//     car3: "Fiat",
//   },
// };
// const res = myObj.cars.car2;
// console.log(res);

//   Nested Arrays and Objects

// Values in objects can be arrays, and values in arrays can be objects:
// let x = "";
// const myObj = {
//   name: "John",
//   age: 30,
//   cars: [
//     {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//     {name:"BMW", models:["320", "X3", "X5"]},
//     {name:"Fiat", models:["500", "Panda"]}
//   ]
// }

// for (let i in myObj.cars) {
//   x += "<h2>" + myObj.cars[i].name + "</h2>";
//   for (let j in myObj.cars[i].models) {
//     x += myObj.cars[i].models[j] + "<br>";
//   }
// }

// document.getElementById("demo").innerHTML = x;


// JavaScript Object Methods

// const user ={
//     userName:'Ishwar',
//     userlast:'Chandra',
//     age: 34,
//     profession:'software engineer',
//     fullName: function(){
//         return `${this.userName} ${this.userlast}`
//     }
// }

// document.getElementById('demo').innerHTML = user.fullName();


// Using Object.values()
// Any JavaScript object can be converted to an array using Object.values():

// const person4 = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };
  
//   const myArray = Object.values(person4);
//   document.getElementById("demo").innerHTML = myArray;
