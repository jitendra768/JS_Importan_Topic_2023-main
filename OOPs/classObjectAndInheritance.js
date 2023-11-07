class Persion{

    // automatic call method
    constructor(n,age){
        // console.log("person created");
        this.name = n;
        this.age = age;
    }
    //prototype method
    sayHi(){
        console.log("hiiii..")
    }

    //staatic method
   static hello(){
        console.log("heloo")
    }
    static sproperty = "smoothing";
}

let person1 = new Persion("Amit", 25);
person1.sayHi();  //aotomatic sayhi add in prototype
Persion.hello();  // not call object via call class   object ko static method nahi milta h class ke sath reh jaata h
// let person2 = new Persion();
console.log(person1);
console.log(Persion.sproperty);  // not connected to object isliye call nahi hota h object se