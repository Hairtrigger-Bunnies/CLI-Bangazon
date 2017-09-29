const { assert: {equal, isFunction, isNumber, deepEqual, isObject, isArray, exists, done } } = require('chai');
const { addNewProduct, getSingleProduct, getCustomerProducts, removeProduct, getActiveProducts } = require('../app/models/Product');
const { promptUpdateProduct } = require('../app/controllers/productCtrl');


// Bobby: tests for getting active customer product list
describe('Products model', () => {
  describe('getActiveProducts fetches products', () => {
    it('should exist', () => {
      isFunction(getActiveProducts);
    });
    // Bobby: getActiveProducts is a function
    it('should be a function', () => {
      isFunction(getActiveProducts);
    });
    // Bobby: removeProduct is a promise
    it('should return a promise', () => {
      isFunction(removeProduct);
    });
    // Bobby: insures the promise is resolved 
    it('promise resolved', function() {
      removeProduct().then(Data => {
        isArray(Data);
      });
    });
  });
});

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

  describe('promptUpdateProduct', () => {
    
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

  describe('getSingleProduct', () => {

    it('should return an object', () => {
      getSingleProduct()
      .then( (data) => {
        isObject(data);
      })
      .catch( (err) => {
        console.log("error getting single product info", err);
      });
    });
  });
  // Items can be removed from bag, per child only. Removing ball from the bag should not be allowed. A child's name must be specified.
  // describe('removeItem', () => {
  //   it('should be a function', () => {
  //     isFunction(removeItem);
  //   });
  // });
});

