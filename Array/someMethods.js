//Episode 2 - Use Cases

//1 check if user with such  name exist
//2 Adding Element to the array
// 3 Remove Duplicates element in the array
// 4 concatenating the array

// Set object , Includes(), some(), reduce, find(), findIndex, concat

const users = [
  {
    id: 1,
    name: "Amit",
    isActive: true,
    age: 28,
  },
  {
    id: 2,
    name: "Shubham",
    isActive: false,
    age: 25,
  },
  {
    id: 1,
    name: "sachin",
    isActive: true,
    age: 45,
  },
  {
    id: 1,
    name: "Ishwar",
    isActive: false,
    age: 96,
  },
];

// 1. check if user with such name exist

//level 0
// const isNameExist = (name, users) => {
//   let res = false;
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].name === name) {
//       res = true;
//     }
//   }
//   return res;
// };

// console.log(isNameExist("Ishwar", users));

//level 1 solution

// const isNameExist=(name,users)=>{
//     const user= users.find((user)=>user.name===name);
//     return Boolean(user);
// }

//level 2 solution

// const isNameExist=(name,users)=>{
//     const user= users.some((user)=>user.name===name);
//     return user;
// }

//level 3 solution

// const isNameExist=(name,users)=>{
//     const index= users.findIndex((user)=>user.name===name);
//     return index>=0;
// }

// 2 Adding element to the array

// const arr=[1,2];
// const append=(arr,ele)=>{
//     return  [...arr,ele]
//     // arr.push(ele);
//     // return arr
// }

// const newArray=append(arr,3);
// console.log(arr,3);
// console.log(arr);

//3 Remove Duplicate Element in an Array

// level 0

const arr = [1, 2, 3, 4, 3, 2, 5];
// function uniqueArray() {
//   const uniqueElements = [];
//   arr.forEach((ele) => {
//     if (!uniqueElements.includes(ele)) {
//       uniqueElements.push(ele);
//     }
//   });
//   return uniqueElements;
// }

// console.log(uniqueArray(arr));

//level 1

function uniqueArray(arr){
    return [...new Set(arr)]
}
console.log(uniqueArray(arr));

