// Event Bubling And Event Cpturing Event Propagation, preventdfault,

// 1-- Event Bubling going child to parent 

// const div = document.querySelector("div");
// div.addEventListener("click",()=>{
//     console.log('div');
// })

// const btn = document.querySelector("button");
// btn.addEventListener('click',()=>{
//     console.log('button clicked')
// });


// 1-- Event capturing going  parent to child 

const div1 = document.querySelector("div");
// div1.addEventListener("click",()=>{
//     console.log('div capture');
// },true);

// const btnn = document.querySelector("button");
// btnn.addEventListener('click',()=>{
//     console.log('button clicked capture')
// });

// 1-- Stop Propagation

// const btnng = document.querySelector("button");
// btnng.addEventListener('click',(event)=>{
//     event.stopPropagation();
//     console.log('button clicked capture')
// });


// 4-- immediatePropagation means we have multiple button event wahi se stop kr do parent pe nai jaana h


const div = document.querySelector('div');
const button = document.querySelector('button');

div.addEventListener("click",(event)=>{
    console.log("div");
})

button.addEventListener("click",(event)=>{
    console.log("button");
});

button.addEventListener("click",(event)=>{
    event.stopImmediatePropagation();
    console.log("button1");
})

button.addEventListener("click",(event)=>{
    console.log("button2");
})

// 5-- prevent Dfault 

// const div2 = document.querySelector('div');
// const button = document.querySelector('button');
// const a = document.querySelector('a');

// div.addEventListener("click",(event)=>{
//     console.log("div");
// })

// button.addEventListener("click",(event)=>{
//     console.log("button");
// });

// a.addEventListener("click", (e)=>{
//     e.preventDefault();
//     console.log('home');
// })