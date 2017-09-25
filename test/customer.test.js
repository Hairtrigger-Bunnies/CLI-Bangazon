const { assert: {equal, isFunction, isNumber, deepEqual, isObject} } = require('chai');
const { setActiveCustomer, getActiveCustomer } = require('../app/activeCustomer');

// Placed here to confirm test file runs properly

describe('active customers', () => {

  it('should be a function', () => {
    isFunction(setActiveCustomer);
  });

  it('should be a function', () => {
    isFunction(getActiveCustomer);
  });

  it('should return an object',  () => {
    let currentCustomer = getActiveCustomer()
      isObject(currentCustomer)
  });

});

// Pro Tip: Remember, we are testing features, not functions. Require whichever modules you need to test a feature
