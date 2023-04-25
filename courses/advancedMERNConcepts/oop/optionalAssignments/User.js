class User {

    constructor(username, emailAddress) {
        this.name = username
        this.email = emailAddress
        this.accountBalance = 0
    }

    makeDeposit(amount) {
        this.accountBalance += amount;
    }

    makeWithdrawal(amount) {
        this.accountBalance -= amount;
    }

    displayBalance() {
        console.log(`User: ${this.name}, Balance: $${this.accountBalance}`);
    }

    transferMoney(otherUser, amount) {
        this.accountBalance -= amount;
        otherUser.accountBalance += amount;
    }

}

const raymond = new User("Raymond Natividad", "r@r.com");
const anthony = new User("Anthony Villacis", "a@a.com");
const karina = new User("Karina Moreno", "k@k.com");

raymond.makeDeposit(150);
raymond.makeDeposit(200);
raymond.makeDeposit(400);
raymond.makeWithdrawal(100);
raymond.displayBalance();

anthony.makeDeposit(50);
anthony.makeDeposit(75);
anthony.makeWithdrawal(25);
anthony.makeWithdrawal(50);
anthony.displayBalance();

karina.makeDeposit(250);
karina.makeWithdrawal(25);
karina.makeWithdrawal(75);
karina.makeWithdrawal(50);
karina.displayBalance();

raymond.transferMoney(karina, 150);
raymond.displayBalance();
karina.displayBalance();