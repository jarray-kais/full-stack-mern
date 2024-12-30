class User {
    constructor(name , email , accountBalance) {
        this.name = name ,
        this.email = email ,
        this.accountBalance = 0
    }
    makeDeposit(amount) {
        this.accountBalance += amount;
        return this  
    }
    makeWithdrawal(amount) {
        this.accountBalance -= amount; 
        return this
    }
    displayBalance() {
        console.log(`USer : ${this.name} , Balance ${this.accountBalance}`)
        return this
    }
    transferMoney(otherUser , amount) {
        if(this.accountBalance > amount) {
            this.makeWithdrawal(amount);
            otherUser.makeDeposit(amount);
            console.log(`Transferred ${amount} from ${this.name} to ${otherUser.name}`);
        }
        else {
            console.log('Insufficient balance');
        }
        return this;
    }
}

const user1 = new User('John Doe', 'john.doe@example.com');
const user2 = new User(' Guido van Rossum', 'Guido.Rossum@example.com');
const user3 = new User('ahmed', 'john.doe@example.com');

//Non Chaining Methods
/* user1.makeDeposit(500);
user1.makeDeposit(500);
user1.makeDeposit(500);
user1.makeWithdrawal(700);
user1.transferMoney(user2 , 500)
user1.displayBalance()
 */

//chaining Methods
user1.makeDeposit(500).makeDeposit(500).makeDeposit(500).makeWithdrawal(700).transferMoney(user2,500).displayBalance()

//Non Chaining Methods
/* user2.makeDeposit(1000);
user2.makeDeposit(1000);
user2.makeWithdrawal(800)
user2.makeWithdrawal(900)
user2.transferMoney(user3 , 200)
user2.displayBalance(); */

//Chaining Methods

user2.makeDeposit(1000).makeDeposit(1000).makeWithdrawal(800).makeWithdrawal(900).transferMoney(user3 , 200).displayBalance()

//Non Chaining Methods
/* user3.makeDeposit(2000);
user3.makeWithdrawal(500)
user3.makeWithdrawal(1000)
user3.makeWithdrawal(500)
user3.displayBalance();
 */

//Chaining Methods

user3.makeDeposit(2000).makeWithdrawal(500).makeWithdrawal(1000).makeWithdrawal(500).displayBalance()

