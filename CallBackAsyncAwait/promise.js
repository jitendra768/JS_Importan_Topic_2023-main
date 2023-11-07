function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return reject("Error While Registering..")
      console.log("user register");
      // resolve();
    }, 2000);
  });
}
function sendEmail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("send email");
      resolve();
    }, 3000);
  });
}
function logIn() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("login user");
      resolve();
    }, 4000);
  });
}
function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("get user data");
      resolve();
    }, 1000);
  });
}
function displayData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("display data");
    }, 1000);
  });
}

//callBack Hell
// register(() => {
//   sendEmail(() => {
//     logIn(() => {
//       getUserData(() => {
//         displayData();
//       });
//     });
//   });
// });

// promises

register()
.then(sendEmail)
.then(logIn)
.then(getUserData)
.then(displayData).catch((err)=>console.log('Error:', err));

console.log("other application work");
