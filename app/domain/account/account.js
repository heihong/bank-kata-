'use strict';

class Account{

    constructor(nameClient, amount) {
        this.nameClient = nameClient || "";
        this.amount  = amount || 0;
    }

    getAmount(){
        return this.amount;

    }

    getNameClient() {
        return this.nameClient;
    }

}

module.exports = Account;