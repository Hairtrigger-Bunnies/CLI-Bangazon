const { assert: {equal, isFunction, isNumber, deepEqual, isObject, isArray, exists, done } } = require('chai');
const { addNewProduct, getSingleProduct, getCustomerProducts} = require('../app/models/Product');
const { promptUpdateProduct } = require('../app/controllers/productCtrl');


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

});

describe('getCustomerProducts', () => {

  it('should be a function', () => {
    isFunction(getCustomerProducts);
  });

  it('should be an object', () => {
    getCustomerProducts()
    .then( (data) => {
        isObject(data);
      })
      .catch( (err) => {
        console.log("error getting product info", err)
      });
    })
  });

  describe('promtUpdateProduct', () => {
    
    it('should be a function', () => {
      isFunction(promptUpdateProduct);
    });

    it('should be an array', () => {
      getCustomerProducts()
      .then( (data) => {
        isArray(data);
      })
      .catch( (err) => {
        console.log("error getting data product info", err);
      });
    });


  });
