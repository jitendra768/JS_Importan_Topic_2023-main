// const user = {
//     name:'John Doe',
//     age:13
// };

// const {name: fullName, age} = user;

// console.log(fullName,age);

// Array
// const  data = ['Rakesh', 30, 'Engineer'];
// const[name, age, proffesion] = data;

// // console.log(data[0]);

// console.log(name, age, proffesion);


// exmple....

const user = {
    name:'Shubham',
    address:'noida',
    age: 27,
    department:{
        professsion:'Engineer',
        shift:'morning',
        add:{
            city:'noida khora',
            zip: 221716
        }
    }
}

// const {department} = user;
// console.log(department);
// const {department:{add}} = user;
// console.log(add);
const {department:{add:{city}}} = user;
console.log(city);


