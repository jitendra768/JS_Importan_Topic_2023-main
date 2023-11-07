// this function call every key presh
// let counter = 0;
// function getData(){
//     console.log('fetching Data', counter++)
// }

// make better function
// let counter = 0;
// function getData(){
//     console.log('fetching Data', +counter++)
// }

// function myDebounce(call, d){
//     let timer;
//     return function(...args){
//         if(timer) clearTimeout(timer);
//         timer  = setTimeout(()=>{
//             call()
//         },d);
//     }
// }
// const BetterFunct = myDebounce(getData, 1000);

function debounce(func, timeout = 500) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }
  function fetchResults() {
    console.log("Fetching input suggestions");
  }
  const processChange = debounce(() => fetchResults());
