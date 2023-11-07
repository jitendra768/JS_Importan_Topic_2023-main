class emp {
  constructor(n) {
    // console.log("constroctoe call")
    this.name = n;
  }
  msg() {
    console.log("Hii..");
  }
}

//method and proporty extend from emp
class manager extends emp {
  constructor(p, d) {
    super(p);
    this.department = d;
  }
  info() {
    console.log(this.name + "Is Manager of" + this.department);
  }
}

const mng1 = new manager("Amit", "web development");
console.log(mng1.info());
