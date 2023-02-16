class BankAccount{

    //generated in constructor - not passed in input inside ()
    constructor(){
        this.ownerName = "Ana";
        this.balance = 2000;
        this. acctNum = 123456789;
    }

    deposit(num){
        this.balance += num;
        console.log(`You deposit $${num} to your account. Total balance is: $${this.balance}`);
    }

    withdraw(num){
        this.balance -= num;
        console.log(`You withdraw $${num} to your account. Total balance is: $${this.balance}`);

    }
}

class CheckingAccount extends BankAccount{

    
    overdraftEnabled = false;
    

    //overriding withdraw method
    withdraw(num){
        if( num > this.balance && this.overdraftEnabled == false ){
           console.log(`The transaction is cancelled due to don't have enough money in your checking account`)
        }
        else{
        //overriding withdraw method so use super keyword
          super.withdraw(num);
        } 

    }

}

class SavingAccount extends BankAccount{

    //overriding withdraw method
    withdraw(num){
        console.log(`Withdraw in saving account is disallow`);
    }

}


const ana = new BankAccount();
ana.deposit(50000);

const sophia = new CheckingAccount();
sophia.withdraw(1000);

const lalia = new SavingAccount();
lalia.withdraw(1100);