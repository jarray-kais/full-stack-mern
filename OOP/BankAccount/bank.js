class BankAccount {
    constructor(intRate = 0.01 , balance = 0) {
        this.intRate = intRate;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        return this;
    }
    
    withdraw(amount) {
        if(this.balance < amount) {
            console.log("Insufficient funds");
            this.balance -= 5;
            return this;
        }
        this.balance -= amount;
        return this;
    }
    displayAccountInfo(){
        console.log(`Balance: $${this.balance}`);
        return this;
    }
    yieldInterest() {
        const interest = this.balance * this.intRate;
        this.balance += interest;
        return this;
    }
}

const account1 = new BankAccount
const account2 = new BankAccount

account1.deposit(1000).deposit(500).deposit(400).withdraw(700).yieldInterest().displayAccountInfo();

account2.deposit(2000).withdraw(1000).withdraw(300).withdraw(300).withdraw(300).withdraw(300).yieldInterest().displayAccountInfo();