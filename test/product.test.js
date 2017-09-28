const { assert: {equal, isFunction, isNumber, deepEqual, isObject, isArray, exists, done } } = require('chai');
const { addNewProduct, getSingleProduct, removeProduct, getActiveProducts } = require('../app/models/Product');

// Bobby- tests for getting active customer product list
describe('removeProduct', () => {
  it('should be a function', () => {
    isFunction(removeProduct);
  });
})

//Tests for the activeCustomer model
describe('addSingleProduct', () => {

  it('should be a function', () => {
    isFunction(addNewProduct);
  });

  // it('should be a function', () => {
  //   isFunction(getActiveCustomer);
  // });

  // it('addSingleProduct should accept an object as its argument and output that object',  () => {
  //   id = null;

    // let body = {
    //   "title": "teenage mustant ninja turtles",
    //   "price": "567",
    //   "description": "dissapointed hank",
    //   "type_id": "6",
    //   "customer_id": "688"
    // };

  //   addSingleProduct(body)
  //   .then( (productid) => {
  //     id = productid;
  //     getSingleProduct(id)
  //     .then( (product) => {
  //       isObject(product);
  //     })
  //     .catch( (err) => {
  //       console.log("error getting cust info", err)
  //     });
  //   })
  //   .catch( (err) => {
  //     console.log("err getting cust info", err)
  //   });
  // });

  // Items can be removed from bag, per child only. Removing ball from the bag should not be allowed. A child's name must be specified.
  // describe('removeItem', () => {
  //   it('should be a function', () => {
  //     isFunction(removeItem);
  //   });
  // });
});