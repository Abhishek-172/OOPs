// function BankAccount(customerName, balance = 0) {
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;

//     this.deposit = function (amount) {
//         this.balance = balance + amount;
//         return this.balance;
//     }

//     this.withdraw = function (amount) {
//         this.balance = balance - amount;
//         return this.balance;
//     }
// }

// let account1 = new BankAccount('Abhishek Pandey', 1000);


/* 
PROTOTYPE:

Now there is a issue with the above code
Whenever we create a new object of BankAccount and we try to console the same
We will get the entire object details 
like:
BankAccount {
  customerName: 'Abhishek Pandey',
  accountNumber: 1672825269264,
  balance: 1000,
  deposit: [Function (anonymous)],
  withdraw: [Function (anonymous)]
}

So here everytime we create a new obj we will have all these details
properties and methods which will again consume a lot of memory.

Now in order to save the memory consumption 
We can write the methods under prototype.

So each and every object can refer the methods and properties from one place.
Instead of creating a local memory copies of the same.
So we can write a above code like this:

function BankAccount(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
    BankAccount.prototype.deposit = function (amount) {
        this.balance = balance + amount;
    }
    
    BankAccount.prototype.withdraw = function (amount) {
        this.balance = balance - amount;
    }
}

let account1 = new BankAccount('Abhishek Pandey', 1000);
account1.deposit(1000);
console.log(account1);

Class:
It is introduced in ES6

Synatx:

class BankAccount {
  constructor(cusName, balance = 0) {
    this.customerName = cusName;
    this.accountNumber = Date.now();
    this.balance = balance;
  }

  deposit(amount) {
    this.balance = this.balance + amount;
  }

  withdraw(amount) {
    this.balance = this.balance - amount;
  }
}


const NewAccount = new BankAccount('Abhishek Pandey', 1000);
console.log(NewAccount.deposit(500));
console.log(NewAccount);


Now there is a one catch over here
Hoisting, Functions (a Normal Function can be hoisted but not classes)
also Arrow functions can't be Hoisted.
Not with var, let or const.


Inheritance (Under Constructor Functions Way):

function BankAccount(cusName, balance = 0) {
  this.customerName = cusName;
  this.balance = balance;
};

BankAccount.prototype.deposit = function (amount) {
  this.balance = this.balance + amount;
};

BankAccount.prototype.withdraw = function (amount) {
  this.balance = this.balance - amount;
};

function SavingAccount(cusName, balance) {
  //Apply Inheritence to get the property of BankAccount
  BankAccount.call(this, cusName, balance);
  this.transactionLimit = 50000;
}

SavingAccount.prototype.transactionLimitExceed = function (amount) {
  this.transactionLimit = this.transactionLimit + amount;
}

//Inorder to get the prototype methods of BankAccount we need to add this

SavingAccount.prototype = Object.create(BankAccount.prototype);

const newSA = new SavingAccount('Abhishek', 5000);
console.log('Saving Account Details', newSA);


Class Way: 
Very Simple we just need to use 
super() under the child class 
and need to class A extends ParentClass

Thats all.

class BankAccount {
  constructor(cusName, balance=9) {
    this.customerName = cusName;
    this.balance = balance;
  }
  deposit (amount) {
    this.balance = this.balance + amount;
  }
  withdraw (amount) {
    this.balance = this.balance - amount;
  }
}

class SavingAccount extends BankAccount{
  constructor(cusName, balance = 0) {
    super(cusName, balance)
    this.customerName = cusName;
    this.balance = balance;
  }
}

const sa = new SavingAccount('Abhishek', 1000);
sa.deposit(400);
console.log('Updated SA', sa);

Encapsulation:

*/

// class BankDetails {
//   #balance;
//   constructor(cusName, balance = 0) {
//     this.customerName = cusName;
//     this.#balance = balance;
//   }
  //This is a Setter Method
  // setBalance(amount) {
  //   //It will Replace the value 
  //   this.#balance = amount;
  // }
  // //This is a Getter Method
  // getBalance() {
  //   return this.#balance;
  // }


  //Now There is a special syntax to create these methods
  //The getters and setters
  //i.e.

  // set balance(amount) {
  //   this.#balance = amount;
  // }
  // get balance() {
  //   return this.#balance;
  // }
// }

// const newBankAccount = new BankDetails('Abhishek Pandey', 400);
// newBankAccount.balance(10000);
// console.log(newBankAccount.balance);


/*
Static Methods and Properties
Aise methods ya props jinko directly class se access kar sakte hai
no need to use object 
*/