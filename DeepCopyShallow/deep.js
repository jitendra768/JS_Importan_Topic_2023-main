// const user = {
//     name:'Amit',
//     age: 45
// }

// const user1 = user;
// user1.name = 'Shubham';
// console.log(user)

// Shallow copy

// const user = {
//     name:'Amit',
//     age: 45
// }

// // const user1 = {...user};
// const user1 = Object.assign({}, user);
// user1.name = 'Shubham';
// console.log(user)
// console.log(user1)

//problem in shallowcopy

// const user = {
//     name:'Amit',
//     age: 45,
//     profession:{
//         post: 'engineer',
//         add: 'noida'
//     }
// }

// // const user1 = {...user};
// const user1 = Object.assign({}, user);
// user1.profession.add = 'delhi';
// console.log(user)
// console.log(user1)


// deep copy
// const user = {
//     name:'Amit',
//     age: 45,
//     profession:{
//         post: 'engineer',
//         add: 'noida'
//     }
// }

// const user1= JSON.parse(JSON.stringify(user));
// user1.profession.add = 'delhi';
// console.log(user)
// console.log(user1)

// deep copy problem
// const user = {
//     name:'Amit',
//     age: 45,
//     profession:{
//         post: 'engineer',
//         add: 'noida'
//     },
//     getAllData: function(){
//         return 'Hello'
//     }
// }

// const user1= JSON.parse(JSON.stringify(user));
// user1.profession.add = 'delhi';
// console.log(user)
// console.log(user1)

// solution

const user = {
    name:'Amit',
    age: 45,
    profession:{
        post: 'engineer',
        add: 'noida'
    },
    getAllData: function(){
        return 'Hello'
    }
}

const user1= _.cloneDeep(user);
user1.profession.add = 'delhi';
console.log(user)
console.log(user1)