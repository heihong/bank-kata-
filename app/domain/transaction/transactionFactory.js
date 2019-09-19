const Transaction = require("./transaction");
const TransactionTypes = require("./transactionType");


const TransactionFactory = {

     forDeposit(amount){
        if(amount<0){
            throw new Error('AMOUNT_SHOULD_BE_POSITIVE');
        }
        return new Transaction(TransactionTypes.DEPOSIT, amount , Date.now());
    },

     forWithdrawal(amount){
        if(amount<0){
            throw new Error('AMOUNT_SHOULD_BE_POSITIVE');
        }
        return new Transaction(TransactionTypes.WITHDRAWAL, amount , Date.now());
    }

}

module.exports = TransactionFactory;