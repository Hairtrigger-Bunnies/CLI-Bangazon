const { assert: {equal, isFunction} } = require('chai');
const { getOrder } = require('../app/models/Order');
const { promptNewOrder } = require('../app/controllers/orderCtrl');

//Order Model tests
describe('Payment type Model', () => {
    it('should be a function', () => {
      isFunction(getOrder);
    });
});

//Order Ctrl tests
describe('Order Ctrl', () => {
  it('should be a function', () => {
    isFunction(promptNewOrder);
  });
});

