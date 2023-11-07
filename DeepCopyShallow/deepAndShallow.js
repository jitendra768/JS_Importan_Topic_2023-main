//shallow copy

const  orignalObject  = {
    a:1,
    b:{
        c:2
    }
}

const shallowCopy = {...orignalObject}
shallowCopy.a=3;

// console.log(shallowCopy);
// console.log(orignalObject);
// shallowCopy.b.c=4;
// console.log(shallowCopy);
// console.log(orignalObject);


// deepCopy

const deepCopy = JSON.parse(JSON.stringify(orignalObject));
console.log(orignalObject);
deepCopy.a=3;
console.log(deepCopy);
deepCopy.b.c = 4;
console.log(deepCopy);
