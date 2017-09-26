const { assert: {equal, isFunction, isNumber, deepEqual, isObject, isArray} } = require('chai');
const { addSingleProduct, getSingleProduct } = require('../app/models/Product');


//Tests for the activeCustomer model
describe('addSingleProduct', () => {

  it('should be a function', () => {
    isFunction(addSingleProduct);
  });

  // it('should be a function', () => {
  //   isFunction(getActiveCustomer);
  // });

  it('addSingleProduct should accept an object as its argument and output that object',  () => {
    id = null;

    let body = {
      "title": "teenage mustant ninja turtles",
      "price": "567",
      "description": "dissapointed hank",
      "type_id": "6",
      "customer_id": "688"
    };

    addSingleProduct(body)
    .then( (productid) => {
      id = productid;
      getSingleProduct(id)
      .then( (product) => {
        isObject(product);
      })
      .catch( (err) => {
        console.log("error getting cust info", err)
      });
    })
    .catch( (err) => {
      console.log("err getting cust info", err)
    });
  });

});