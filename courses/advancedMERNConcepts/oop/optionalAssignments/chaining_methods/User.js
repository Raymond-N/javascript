class User {

    constructor(username, emailAddress) {
        this.name = username
        this.email = emailAddress
        this.accountBalance = 0
    }

    makeDeposit(amount) {
        this.accountBalance += amount;
        return this;
    }

    makeWithdrawal(amount) {
        this.accountBalance -= amount;
        return this;
    }

    displayBalance() {
        console.log(`User: ${this.name}, Balance: $${this.accountBalance}`);
        return this;
    }

    transferMoney(otherUser, amount) {
        this.accountBalance -= amount;
        otherUser.accountBalance += amount;
        return this;
    }

}

const raymond = new User("Raymond Natividad", "r@r.com");
const anthony = new User("Anthony Villacis", "a@a.com");
const karina = new User("Karina Moreno", "k@k.com");

raymond.makeDeposit(150).makeDeposit(200).makeDeposit(400).makeWithdrawal(100).displayBalance();

anthony.makeDeposit(50).makeDeposit(75).makeWithdrawal(25).makeWithdrawal(50).displayBalance();

karina.makeDeposit(250).makeWithdrawal(25).makeWithdrawal(75).makeWithdrawal(50).displayBalance();

raymond.transferMoney(karina, 150);
raymond.displayBalance();
karina.displayBalance();