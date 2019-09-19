
let assert = require('assert');
const Account = require('../app/domain/account/account');


describe('Test class Account',  () => {

    let account;

     const makeTransactions = () => {
         account.applyDeposit(100);
         account.applyWithdrawal(50);
         account.applyDeposit(20);
    }

    beforeEach(()=> {
        account = new Account('jean');
    });

    it('should make 3 deposit',  () => {
        makeTransactions();
        assert.equal(3, account.history.length);
    });

    it('should make 3 deposit return 70',  () => {
        makeTransactions();
        assert.equal(70, account.balance);
    });

    it('should throw exception and negative amount', () => {
        assert.throws( () => {
            account.applyDeposit(-1)
        }, Error);
    });

    it('should throw exception and negative amount', () => {
        assert.throws(() => {
             account.applyWithdrawal(-1);
        }, Error);
    });




});