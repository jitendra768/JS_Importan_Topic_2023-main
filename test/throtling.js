const myThrotle = (fn, d) => {
  return function (...args) {
    document.getElementById("myid").disabled = true;
    setTimeout(() => {
      fn();
    }, d);
  };
};

const newFun = myThrotle(() => {
  document.getElementById("myid").disabled = false;
  console.log("user Clicked!!");
}, 5000);
