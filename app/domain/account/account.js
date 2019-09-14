'use strict';

class Account{

    constructor(nameClient, amount) {
        this.nameClient = nameClient || "";
        this.amount  = amount || 0;
        this.transactions = [];
        this.amountTransaction = [];
    }

    getAmount(){
        return this.amount;

    }

    getNameClient() {
        return this.nameClient;
    }

    setTransactions(transaction){
        this.transactions.push(transaction)
    }

    getTransactions(){
        return this.transactions;
    }
    getAmountTransaction(){
        let result = this.amount;
        for(let i = 0; i< this.transactions.length; i++){
            result +=this.transactions[i].getTransaction().getAction();
            this.amountTransaction.push(result);
        }

        return this.amountTransaction;
    }


}

module.exports = Account;