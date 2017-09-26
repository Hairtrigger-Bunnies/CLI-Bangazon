const { assert: {equal, isFunction, isNumber, deepEqual, isObject, isArray} } = require('chai');
const { setActiveCustomer, getActiveCustomer } = require('../app/models/activeCustomer');
const { activeCustomer } = require('../app/controllers/activeCustomerCtrl');


//Tests for the activeCustomer model
describe('active customers model', () => {

  it('should be a function', () => {
    isFunction(setActiveCustomer);
  });

  it('should be a function', () => {
    isFunction(getActiveCustomer);
  });

  it('setActiveCustomer should accept a number argument that determines the ID of the active customer object',  () => {
    setActiveCustomer(8);
    getActiveCustomer()
    .then( (customer) => {
      isObject(customer);
      console.log("customer", customer)
    })
    .catch( (err) => {
      console.log("err getting cust info", err)
    });
  });

});

//Tests for active customer controller
describe('active customers controller', () => {
  
    it('should be a function', () => {
      isFunction(activeCustomer);
    });
  
  
  });