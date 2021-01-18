var initial_balance;
var amount;
var balance ;

class Account{                      // Declare SuperClass

        constructor(initial_balance){
             this.initial_balance = initial_balance;
            }

        deposite(amount){
            balance = this.initial_balance + amount;
            console.log("Your Amount is Deposite now Balance is :-" + balance);
        }

        widhraw(amount){
            if(amount <=0){
                console.log("insufficent Amount in your Account")
            }
            else{

                balance =  balance - amount;
                console.log("your Money is Widhraw  Now Balance is :- " + balance);

            }
           
        }



}

class Saving_account extends Account{      // Declare Subclass

        constructor(initial_balance , intrest){
            super(initial_balance);
            this.intrest = intrest;
            
        }

        saving_deposite(amount){
            super.deposite(amount);
        }

        saving_widhraw(amount){
            super.widhraw(amount);
        }


}


acc = new Saving_account(1000 , 2.0);
acc.saving_deposite(500);
acc.saving_widhraw(1500)