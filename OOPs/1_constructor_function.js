function BanckAccount(customerName, balance=0){
    this.customerName = customerName;
    this.accounNumber = Date.now();
    this.balance = balance;

    this.deposit = function(amount){
        this.balance += amount;
    }

    this.withdraw = function(amount){
        this.balance -= amount;
    }
}

// const AmitAccount = new BanckAccount("Amit Kumar", 1000);
// const SachinAccount = new BanckAccount("Sachin Kumar");

// AmitAccount.deposit(4000);
// SachinAccount.deposit(1000);
// AmitAccount.withdraw(1000);
// SachinAccount.withdraw(400);

// console.log(AmitAccount);
// console.log(SachinAccount);

const accounts = [];
const accountForm = document.querySelector('#accountForm');
const customerName = document.querySelector('#customerName');
const balance = document.querySelector('#balance');

const depositForm = document.querySelector('#depositForm');
const accountNumber = document.querySelector('#accountNumber');
const amount = document.querySelector('#amount');

accountForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  const account = new BanckAccount(customerName.value, +balance.value);
  accounts.push(account);
  console.log(accounts);
//   console.log(customerName.value, balance.value);
})

depositForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const account = accounts.find((account)=>account.accounNumber === +accountNumber.value);
    account.deposit(+amount.value);
    console.log(accounts);
})
