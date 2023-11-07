function callbackFunction(name){
    console.log("Hello" +name);
}

function outerFunction(cb){
    let name= prompt("please enter your name")
    cb(name);
}

outerFunction(callbackFunction)

// Why do we need callbacks
function firstFunction(){
    setTimeout( function (){
        console.log("First function called")
    },1000)
}

function secondFunction(){
    console.log("Second function called")
}
firstFunction()
secondFunction()