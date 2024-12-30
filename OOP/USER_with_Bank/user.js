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
        }else {
            this.balance -= amount;
        }
        
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


class User {
    constructor(name , email) {
        this.name = name ,
        this.email = email ,
        this.account= []
    }
    createAccount(intRate = 0.02 , balance = 0) {
        const newAccount = new BankAccount(intRate , balance)
        this.account.push(newAccount)
        return this;
    }
    makeDeposit(index , amount) {
        this.account[index].deposit(amount);
        return this  
    }
    makeWithdrawal(index , amount) {
        this.account[(index, amount)].withdraw(amount); 
        return this
    }
    displayUserBalance(index) {
        console.log(`USer : ${this.name}, Account: ${index + 1}  , Balance $ ${this.account[index].balance}`)
        return this
    }
    transferMoney(otherUser , amount) {
        if(this.account.balance > amount) {
            this.withdraw(amount);
            otherUser.account.makeDeposit(amount);
            console.log(`Transferred ${amount} from ${this.name} to ${otherUser.name}`);
        }
        else {
            console.log('Insufficient balance');
        }
        return this;
    }
}


// Create users
const user1 = new User("Alice", "alice@example.com");
const user2 = new User("Bob", "bob@example.com");

// Create multiple accounts for each user
user1.createAccount(0.02, 100).createAccount(0.03, 200);
user2.createAccount(0.01, 150);

// Deposit money into different accounts
user1.makeDeposit(0, 50).makeDeposit(1, 100);
user2.makeDeposit(0, 50);

// Display balances for specific accounts
user1.displayUserBalance(0); // Account 1 of Alice
user1.displayUserBalance(1); // Account 2 of Alice
user2.displayUserBalance(0); // Account 1 of Bob

