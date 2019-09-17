
let assert = require('assert');
const Account = require('../app/domain/account/account');
const Client = require('../app/domain/client/client');
const Operation = require('../app/domain/operation/operation');


describe('Test class Operation', function () {

    let account, client;

    beforeEach(()=> {
        account = new Account("heihong");
        client = new Client("heihong", account);
    });

});