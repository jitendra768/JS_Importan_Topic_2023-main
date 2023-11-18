// // First Case of currying function

// const userDetails = {
//   name: "Amit Kumar",
//   Age: 28,
//   Designation: "Software Engineer",
//   printDetails: function () {
//     console.log(this.Designation);
//   },
// };
// userDetails.printDetails();

// call methods

// // case 1 - if we have a more object and point to same logic what to do?
// const userDetails2 = {
//   name: "shubham Kumar",
//   Age: 30,
//   Designation: "BackEnd Engineer",
// };

// userDetails.printDetails.call(userDetails2);

// // casse -2 if function outside of object then what to do

// const userDetails = {
//   name: "Amit Kumar",
//   Age: 28,
//   Designation: "Software Engineer",
// };
// const userDetails2 = {
//   name: "shubham Kumar",
//   Age: 30,
//   Designation: "BackEnd Engineer",
// };

// let printDetails = function (state, country) {
//   console.log(this.name+" "+state+" "+country);
// };

// printDetails.call(userDetails,'Delhi', 'india');

// printDetails.call(userDetails2, 'Noida', 'india');

// apply methods

// printDetails.apply(userDetails2, ['Noida', 'india']);

// bind methods

// let newFun =printDetails.bind(userDetails2, 'Noida', 'india');
// newFun();



// bind call apply

const user = {
  name: "CoderGyan",
  printName() {
    console.log(this.name);
  },
};

const user2 = {
  name: "johndoe",
};
const res = user.printName.bind(user2);
res();
