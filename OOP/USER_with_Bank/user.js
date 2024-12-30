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
        this.account= new BankAccount(0.02 , 0) 
    }
    makeDeposit(amount) {
        this.account.deposit(amount);
        return this  
    }
    makeWithdrawal(amount) {
        this.account.withdraw(amount); 
        return this
    }
    displayUserBalance() {
        console.log(`USer : ${this.name} , Balance ${this.account.balance}`)
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

