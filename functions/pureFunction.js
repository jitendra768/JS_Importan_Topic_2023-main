// pure function 

function pureFun(a,b){
    return a+b;
}
console.log(pureFun(4,6));

//impure
var addNew = 0;

function add(a,b){ 
  addNew =5; 
  return a + b + addNew
}

console.log(add(4,5))