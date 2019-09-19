
const TransactionFactory = require('../transaction/transactionFactory')



class Account{

    constructor() {
        this.history = [];
    }

    applyDeposit(amount){
        let transaction = TransactionFactory.forDeposit(amount);
        this.history.push(transaction);
    }

    applyWithdrawal(amount){
        let transaction = TransactionFactory.forWithdrawal(amount);
        this.history.push(transaction);
    }

    get balance(){
        return this.history.reduce((balance, transaction) => {
            if (transaction.isDeposit){
                return balance + transaction.amount;
            }
            if(transaction.isWithdrawal){
                return balance - transaction.amount;
            }
        }, 0)
    }
}

module.exports = Account;