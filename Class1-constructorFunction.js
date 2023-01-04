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
*/

// function BankAccount(customerName, balance = 0) {
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;
//     BankAccount.prototype.deposit = function (amount) {
//         this.balance = balance + amount;
//     }
    
//     BankAccount.prototype.withdraw = function (amount) {
//         this.balance = balance - amount;
//     }
// }

// let account1 = new BankAccount('Abhishek Pandey', 1000);
// account1.deposit(1000);
// console.log(account1);


