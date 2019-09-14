
let assert = require('assert');
const Account = require('../app/domain/account/account');
const Client = require('../app/domain/client/client');
const Deposit = require('../app/domain/deposit/deposit');
const Transaction = require('../app/domain/transaction/transaction');


describe('Test class Account', function () {

    let account, client, deposit, deposit1, transaction, transaction1;

    beforeEach(()=> {
        account = new Account("heihong");
        client = new Client("heihong", account);
        deposit = new Deposit(200, "14/09/2019");
        deposit1 =  new Deposit(200, "14/09/2019");
        transaction  = new Transaction(deposit, account);
        transaction1  = new Transaction(deposit1, account);
        account.setTransactions(transaction);
        account.setTransactions(transaction1);
    });

    it('should test getNameClient and return heihong', function () {
        assert.equal("heihong", account.getNameClient())
    });

    it('should test getAmount and return 0', function () {
        assert.equal(0, account.getAmount())
    });

    it('should test getTransaction and return 2', function () {
        assert.equal(2, account.getTransactions().length)
    });

    it('should test setAmountTransaction and return [ 200, 400 ]', function () {
        assert.equal(200, account.getAmountTransaction()[0]);
        assert.equal(400, account.getAmountTransaction()[1]);
    });


});