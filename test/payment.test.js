const { assert: {equal, isFunction } } = require('chai');
const { addNewPaymentType } = require('../app/models/PaymentType');
const { promptNewPayment } = require('../app/controllers/paymentCtrl');

//Payment Model tests
describe('Payment type Model', () => {
    it('should be a function', () => {
      isFunction(addNewPaymentType);
    });
    // it('should... ', () => {
      
    // })
});

//Payment Ctrl tests
describe('Payment type Ctrl', () => {
  it('should be a function', () => {
    isFunction(promptNewPayment);
  });
});