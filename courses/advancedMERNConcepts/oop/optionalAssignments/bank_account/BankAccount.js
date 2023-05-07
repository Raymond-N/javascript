class BankAccount {

    constructor(intRate = 0.01, balance = 0) {
        this.rate = intRate
        this.accountBalance = balance
    }

    deposit(amount) {
        this.accountBalance += amount;
        return this;
    }

    withdrawal(amount) {
        this.accountBalance >= amount?
        this.accountBalance -= amount:
        console.log("Insufficient funds: Charging a $5 fee")
        this.accountBalance -=5
        return this;
    }

    displayAccountInfo() {
        console.log(`Balance: ${this.accountBalance}`)
    }

    yieldInterest() {
        this.accountBalance >= 0?
        this.accountBalance * this.rate:
        null;
        return this;
    }
}

const bankAccount1 = new BankAccount();
const bankAccount2 = new BankAccount();

bankAccount1.deposit(50).deposit(100).deposit(50).withdrawal(50).yieldInterest().displayAccountInfo();