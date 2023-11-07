// // ex-1
const age=[23,45,16,10,45];
function canvote(age){
    return age>=18;
};

function func(){
    const filter = age.filter(canvote);
    console.log(filter)
}

func();


// // ex-2

// function isPositive(value){
//     return value>0;
// }

// function positive(){
//     const result =[-2,3,-5,4,6].filter(isPositive);
//     console.log(result);
// }

// positive();

// console.log('method');