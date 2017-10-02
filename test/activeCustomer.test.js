const { assert: {equal, isFunction, isNumber, deepEqual, isObject, isArray, assert} } = require('chai');
const { setActiveCustomer, getActiveCustomer } = require('../app/models/activeCustomer');
const { promptActiveCustomer } = require('../app/controllers/activeCustomerCtrl');


//Tests for the activeCustomer model
describe('active customers model', () => {

  it('should be a function', () => {
    isFunction(setActiveCustomer);
  });

  it('should be a function', () => {
    isFunction(getActiveCustomer);
  });

  
    });


  //Josh: HAD TO GIVE IT PROPER DATA TO TEST
  it('setActiveCustomer should accept a number argument that determines the ID of the active customer object', function() {
    let data = {
      name: 5
    }
    setActiveCustomer(data, '5');

    equal(data.name, 5);
  });

//Tests for active customer controller
describe('active customers controller', () => {
  
    it('should be a function', () => {
      isFunction(promptActiveCustomer);
    });
  
  
  });