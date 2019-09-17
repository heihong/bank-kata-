'use strict';


const DEPOSIT = "deposit";
const WITHDRAWAL = "withdrawal";

class Account{

    constructor(nameClient) {
        this.nameClient = nameClient || "";
        this.amount = 0;
        this.history = [];
    }

    _applyTransaction(type, amount){
        if(amount<0){
            throw new Error('AMOUNT_SHOULD_BE_POSITIVE');
        }
        const transaction = {
            type,
            amount,
            date : Date.now()
        };
        this.history.push(transaction);

    }

    applyDeposit(amount){
        this._applyTransaction(DEPOSIT, amount);
    }

    applyWithdrawal(amount){
        this._applyTransaction(WITHDRAWAL, amount);
    }

    get balance(){
        return this.history.reduce((balance, transaction)=>{
            const { type, amount } = transaction;
            if (type === DEPOSIT){
                return balance + amount;
            }
            if(type === WITHDRAWAL){
                return balance - amount;
            }
            throw new Error('BAD_TRANSACTION_TYPE');
        }, 0)
    }




}

module.exports = Account;