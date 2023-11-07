// Scenario

// 1. Register
// 2. Send welcome Image
// 3. Login
// 4. Get user data
// 5. Display user Data

// callBack
function register(cb) {
  setTimeout(() => {
    console.log("user register");
    cb();
  }, 2000);
}
function sendEmail(cb) {
  setTimeout(() => {
    console.log("send email");
    cb();
  }, 3000);
}
function logIn(cb) {
  setTimeout(() => {
    console.log("login user");
    cb();
  }, 4000);
}
function getUserData(cb) {
  setTimeout(() => {
    console.log("get user data");
    cb();
  }, 1000);
}
function displayData() {
  setTimeout(() => {
    console.log("display data");
  }, 1000);
}

//callBack Hell
register(() => {
  sendEmail(() => {
    logIn(() => {
      getUserData(() => {
        displayData();
      });
    });
  });
});

console.log("other application work");
