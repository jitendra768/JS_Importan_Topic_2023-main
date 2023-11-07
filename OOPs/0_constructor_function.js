function Persion(first, last, ag){
    this.firstName = first;
    this.lastName = last;
    this.ag = ag;
    this.sayHi = function(){
        console.log("Hello")
    }
}

const persion1 = new Persion("Amit", "Kumar", 28);
persion1.sayHi();
const persion2 = new Persion("Shubham", "Kumar", 29);
console.log(persion1, persion2);