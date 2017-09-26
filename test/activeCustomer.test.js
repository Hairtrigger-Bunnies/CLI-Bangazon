const { assert: {equal, isFunction, isNumber, deepEqual, isObject} } = require('chai');
const { setActiveCustomer, getActiveCustomer } = require('../app/activeCustomer');


//Tests for the activeCustomer model
describe('active customers model', () => {

  it('should be a function', () => {
    isFunction(setActiveCustomer);
  });

  it('should be a function', () => {
    isFunction(getActiveCustomer);
  });

  it('should return an object',  () => {
    let currentCustomer = getActiveCustomer();
    isObject(currentCustomer);
  });

  it('setActiveCustomer should accept a number argument that determines the ID of the active customer object',  () => {
    setActiveCustomer(7);
    let expected = { id: 7};
    deepEqual(getActiveCustomer(), expected);
  });  

});
