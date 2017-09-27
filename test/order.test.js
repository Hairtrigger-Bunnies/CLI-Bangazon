const { assert: {equal, isFunction, isArray} } = require('chai');
const { getOrder } = require('../app/models/Order');
const { promptCompleteOrder, getAllPaymentTypes } = require('../app/controllers/orderCtrl');

// Josh: Order Model tests
describe('Payment type Model', () => {
    it('should be a function', () => {
      isFunction(getOrder);
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
