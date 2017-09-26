const { assert: {equal, isFunction, isNumber, deepEqual, isObject, isArray} } = require('chai');
const { setActiveCustomer, getActiveCustomer } = require('../app/models/Products');
const { activeCustomer } = require('../app/controllers/productsCtrl');


//Tests for the activeCustomer model
describe('add product model', () => {

  it('should be a function', () => {
    isFunction(addSingleProduct);
  });

  // it('should be a function', () => {
  //   isFunction(getActiveCustomer);
  // });

  // it('setActiveCustomer should accept a number argument that determines the ID of the active customer object',  () => {
  //   setActiveCustomer(8);
  //   getActiveCustomer()
  //   .then( (customer) => {
  //     isObject(customer);
  //     console.log("customer", customer)
  //   })
  //   .catch( (err) => {
  //     console.log("err getting cust info", err)
  //   });
  // });

});