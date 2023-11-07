const myThrottle = (fn, d) => {
  return function (...args) {
    document.getElementById("myId").disabled = true;
    setTimeout(() => {
      fn();
    }, d);
  };
};

const newFun = myThrottle(() => {
  document.getElementById("myId").disabled = false;
  console.log("User Clicked!!");
}, 5000);
