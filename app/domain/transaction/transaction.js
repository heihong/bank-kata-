'use strict';

class Transaction{
    constructor(transaction, account){
        this.transaction = transaction,
        this.account = account;
    }

    getTransaction(){
        return this.transaction;
    }

    getAccount() {
        return this.account;
    }

    printDate(transaction){
        return `${transaction.getDate()}/${transaction.getMonth()}/${transaction.getFullYear()}`;
    }

    getStatement() {
        return `Deposit ${this.transaction.getAmount()} the ${this.printDate(this.transaction.getDateOperation())}`;
    }



}

module.exports = Transaction;