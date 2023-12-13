//normal function 

function calculateVolume(lenght, breadth,height){
    return lenght*breadth*height;
}
const res = calculateVolume(4,5,6);
console.log(res)

// currying with closure

function volume(lenght){
    return function(breadth){
        return function(height){
            return lenght*breadth*height;
        }
    }
}

console.log(volume(4)(5)(6))