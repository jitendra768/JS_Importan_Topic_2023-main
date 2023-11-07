// function a(){
//     console.log(b);
// }
// var b=2;
// a();


function a(){
    var b = 10;
    c();
    function c(){
        console.log(b);
    }
}
a();




//1 What exactly is Scope?

// Define a variable in the global scope:
const fullName = 'Oluwatobi Sofela';

// Define nested functions:
function profile() {
  function sayName() {
    function writeName() {
      return fullName;
    }
    return writeName();
  }
  return sayName();
}

const result = profile();
console.log(result);