function register(cb){
    setTimeout(()=>{
        console.log("user register");
        cb()
    },2000)
}

function login(cb){
    setTimeout(()=>{
        console.log("user login");
        cb();
    },1000)
}
console.log("end")
register(()=>{
    login()
})
