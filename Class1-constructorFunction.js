function BankAccount(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    this.deposit = function (amount) {
        this.balance = balance + amount;
        return this.balance;
    }

    this.withdraw = function (amount) {
        this.balance = balance - amount;
        return this.balance;
    }
}

let account1 = new BankAccount('Abhishek Pandey', 1000);