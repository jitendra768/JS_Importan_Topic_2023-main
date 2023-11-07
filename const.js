// // Changing the content of array is
// // possible in const array

// const array = ['pankaj', 'shubh', 'ayaan', 'vihan', 'vedant']
// // console.log(array.toString());

// // ham array me content ko change kr sakte h
// array[2] = 'amit';
// // console.log(array.toString());

// // Aur koi new value bhi add kr skte h push method se
// array.push('namor');
// // console.log(array.toString());

// const person = {
//     first_name: "Pankaj",
//     last_name: "Singh",
//     Age: 20,
//     About: "Web Developer and Competitive Programmer"
// };

// const { first_name, last_name, Age, About } = person;
// // console.log(first_name, last_name, Age,About);
// // console.log(person);

// // It describes the const variable which contains the Block Scope.

// const x = 22;
// {
//     const x = 90;
//     // console.log(x);

//     {
//         const x = 77;
//         // console.log(x);
//     }
//     {
//         const x = 45;
//         // console.log(x);
//     }
// }
// // console.log(x);

// // Interview Question

// for(var i=0; i<10; i++){
//     setTimeout(()=>{
//         console.log(i)
//     });
// };



a();
// b();

function a(){
    console.log("call a");
}
// a();


const b = function(){
    console.log("call b")
}
b();
