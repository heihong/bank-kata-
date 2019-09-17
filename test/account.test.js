
let assert = require('assert');
const Account = require('../app/domain/account/account');
const Client = require('../app/domain/client/client');
const Operation = require('../app/domain/operation/operation');


describe('Test class Account', function () {

    let account, client, account1;

    beforeEach(()=> {
        account = new Account("heihong");
        client = new Client("heihong", account);
        account1 = new Account();
    });

    it('should make 3 deposit ', function () {
        let account = new Account("jean");
        account.applyDeposit(100);
        account.applyWithdrawal(50);
        account.applyDeposit(20);

        assert.equal(3, account.history.length);
    });

    it('should make 3 deposit return 70', function () {
        let account = new Account("jean");
        account.applyDeposit(100);
        account.applyWithdrawal(50);
        account.applyDeposit(20);

        assert.equal(70, account.balance);
    });



});