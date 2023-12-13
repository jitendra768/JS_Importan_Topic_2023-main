let counter = 0;
function getData() {
  console.log("fetch data" + counter++);
}

function myDebaounce(call, d) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      call();
    }, d);
  };
}

const betterFunction = myDebaounce(getData, 1000);

