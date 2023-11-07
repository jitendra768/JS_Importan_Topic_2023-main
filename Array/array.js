// const language =['java', 'javascript', 'python'];

//1. add item array last push()
// language.push('c')

//2.add item start
// language.unshift('dart');

//3. pop() pop out lastitem
// language.pop();

//4.shift() pop out start item in array
// language.shift();

// console.log(language);

// loop in javascript

//5. for(let i=0; i<4; i++){
//     console.log('*')
// }

// const actors = [
//     {
//         name:"Actor1",
//         payment: 100
//     },
//     {
//         name:"Actor2",
//         payment: 200
//     },
//     {
//         name:"Actor3",
//         payment: 300
//     }
// ]

// for(let i=0; i<actors.length; i++){
//     // console.log(i);
//     actors[i].payment = actors[i].payment-10;
//     // console.log(actors[i]);

// }
// console.log(actors)

//6. forEach methods

// actors.forEach((actor)=>{
//     actor.payment=actor.payment-10;
//     // console.log(actor);
// })
// console.log(actors);

//7. forof loop

// for (const actor of actors) {
//     actor.payment=actor.payment-10;
//     // console.log(actor);
// }
// console.log(actors);

//8. filter methods

// const students = [
//     {
//         name:"student1",
//         marks:60
//     },
//     {
//         name:"student2",
//         marks:45
//     },
//     {
//         name:"student3",
//         marks:35
//     }
// ]

// const failed=students.filter((student)=>{
// //  console.log(student);
// // return true;
// if(student.marks<45){
//     return true;
// }else{
//     return false;
// }
// })

// console.log(failed);

//9. Map Methods

// const users = [
//     {
//         fName:'john',
//         lName:'doe'
//     },
//     {
//         fName:'jane',
//         lName:'doe'
//     }
// ]

// const finalUsers = users.map((user)=>{
//     // console.log(user);
//     return {
//         fullName: `${user.fName} ${user.lName}`
//     }
// })

// console.log(finalUsers);

//10. Reduce Methods

// const movies = [
//   {
//     name: "Intersttaler",
//     budget: 300,
//   },
//   {
//     name: "Avengers",
//     budget: 400,
//   },
//   {
//     name: "Avengers EndGame",
//     budget: 500,
//   },
// ];

// const total =  movies.reduce((acc, movie)=>{
//     acc += movie.budget;
//     return acc;
// },0);

// console.log(total);

// 11. Find Methods

// const array = [-10,-20,0.30,-401,-50];
// const found = array.find((ele)=>{
//     return ele>0;
// });

// console.log(found);

//12.  Short Methods

const names = ["Amit","shubham","Ic", "sachin","Arti","Dolly"];
names.sort();
console.log(names);
