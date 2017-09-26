const { assert: {equal, isFunction, isObject, isArray } } = require('chai');
const { addNewPaymentType, getAllPaymentTypes } = require('../app/models/PaymentType');
const { promptNewPayment } = require('../app/controllers/paymentCtrl');

const path = require('path');
const sqlite3 = require("sqlite3").verbose();
const dbPath = path.resolve(__dirname, '..', 'db', 'bangazon.sqlite');
const db = new sqlite3.Database(dbPath);

// Josh: Payment Model tests
describe('Payment type Model', () => {
    it('should be a function', () => {
      isFunction(addNewPaymentType);
    });
    it('should return promise', () => {
      isFunction(getAllPaymentTypes);
    });
    // Josh: Makes sure is promise and returns array
    it('resolves as promised', function() {
      getAllPaymentTypes()
      .then(Data => {
        isArray(Data);
      })
    });

});

// Josh: Payment Ctrl tests
describe('Payment type Ctrl', () => {
  it('should be a function', () => {
    isFunction(promptNewPayment);
  });
});