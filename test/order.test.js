const { assert: {equal, isFunction, isArray} } = require('chai');
const { createOrder } = require('../app/models/Order');
const { promptCompleteOrder, getAllPaymentTypes } = require('../app/controllers/orderCtrl');

// Josh: Order Model tests
describe('Payment type Model', () => {
    it('should be a function', () => {
      isFunction(createOrder);
    });
});

// Josh: Order Ctrl tests
describe('Order Ctrl', () => {
  it('should be a function', () => {
    isFunction(promptCompleteOrder);
  });
  // it('resolves as promised', function() {
  //   getAllPaymentTypes()
  //   .then(Data => {
  //     isArray(Data);
  //   })
  // });
});
