const TransactionTypes = require("./transactionType");

class Transaction{
    constructor(type, amount, date){
        this.type = type;
        this.amount = amount;
        this.date = date;
    }

    get isDeposit() {
        return this.type === TransactionTypes.DEPOSIT
    }

}

module.exports = Transaction;