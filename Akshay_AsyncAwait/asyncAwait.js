/**
 * What is async?
 * what is await?
 * how async await works behind the scenes?
 * example of using async await?
 * error handling?
 * interviews?
 * async await vs Promise.then/catch
 */

// const p = new Promise((resolve, reject)=>{
//     resolve("Promise Resolve Value!!")
// });

// function getData(){
//     p.then((res)=>console.log(res))
// }
// getData();

// await can only can be used inside an async function
// async function handlePromise(){
//     const val = await p;
//     console.log(val);
// }
// handlePromise();


// how do we handle Promises before async await

// always returna promise

// async function getData(){
//     // return "Namaste";
//     return p;
// }

// const dataPromise = getData();
// dataPromise.then((res)=>console.log(res))


//example 2

// const p = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Promise Resolve Value!!")
//     },10000)
// });

// function getData(){
//     //js engine will not wait for promise to be resolve
//     p.then((res)=>console.log(res));
//     console.log(`Namaste JavaScript`);
// }

// getData();


// await can only can be used inside an async function
// async function handlePromise(){
//      console.log("Hello World");
//     //js engine was waiting for promise to resolve
//     const val = await p;
//     console.log(`namaste javascript`);
//     console.log(val);

//     const val2 = await p;
//     console.log(`namaste javascript2`);
//     console.log(val2);
// }
// handlePromise();

//Example 3

const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolve Value1!!")
    },10000)
});

const p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolve Value2!!")
    },5000)
});


async function handlePromise(){
    console.log("Hello World");
   //js engine was waiting for promise to resolve
   const val = await p1;
   console.log(`namaste javascript`);
   console.log(val);

   const val2 = await p2;
   console.log(`namaste javascript2`);
   console.log(val2);
}
handlePromise();