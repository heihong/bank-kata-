'use strict';

class Account{

    constructor(nameClient) {
        this.nameClient = nameClient || "";
        this._amount  = amount || 0;
    }

    getNameClient() {
        return this.nameClient;
    }

    getAmount() {
        return  this.amount;

    }
}

module.exports = Account;