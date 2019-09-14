
let assert = require('assert');
const Account = require('../app/domain/account/account');


describe('Test class Account', function () {

    let account;

    beforeEach(()=> {
        account = new Account("heihong");
    });

    it('should test getNameClient and return heihong', function () {
        assert.equal("heihong", account.getNameClient())
    });

    it('should test getAmount and return 0', function () {
        assert.equal(0, account.getAmount())
    });
});