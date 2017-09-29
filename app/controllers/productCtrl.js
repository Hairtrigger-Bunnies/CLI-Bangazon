'use strict';

const prompt = require('prompt');
const { addNewProduct } = require('../models/Product');
const { getActiveCustomer } = require('../models/ActiveCustomer');
const { getAllProducts, removeSingleProduct, getActiveProducts, removeProduct } = require('../models/Product');
const {red, magenta, blue} = require("chalk");
const colors = require("colors/safe");

// Josh: PROMPTS FOR NEW PRODUCT
module.exports.promptNewProduct = (req, res, next) => {
    return new Promise( (resolve, reject) => {
    prompt.get([{
      name: 'title',
      description: 'Enter product name',
      type: 'string',
      required: true
    }, {
      name: 'price',
      description: 'Enter price',
      type: 'string',
      required: true
    }, {
      name: 'description',
      description: 'Enter description of product',
      type: 'string',
      required: true
    }, {
      name: 'type',
      description: 'Enter product type',
      type: 'string',
      required: true
    }], function(err, results) {
      if (err) return reject(err);
      //Josh: ADDS CUSTOMER ID TO RESULTS
      results.customer_id = getActiveCustomer();
      resolve(results);
    })
  });
};

//Josh: FROM MODEL, ADDS PROD TO DB
module.exports.addProduct = (data) => {
  addNewProduct(data);
}

//Bobby: FROM MODEL, FETCHES PRODUCT FROM ACTIVE USER DB AND DISPLAYS THE ONES NOT LINKED TO A PRODUCT ORDER
module.exports.promptGetActiveUserProducts = (userInput) => {
  let productRemoveArray = [];
  return new Promise( (resolve, reject) => {
    getActiveProducts().then(data => {
      for (let i = 0; i < data.length; i++) {
        data[i].removeProductID = i + 1;
        productRemoveArray.push(data[i]);
        console.log(`${magenta(i + 1 + ".")} ${data[i].title}`)
      }
      console.log("");
      prompt.get(
        [
          {
            name: "name",
            description: "Select a product to remove from the system",
            type: "string",
            required: true
          }
        ],
        function(err, data) {
          if (err) return reject (err)
          resolve(data);
          let object = productRemoveArray[parseInt(`${data.name}` - 1)];
          //Bobby: CALLS FUNCTION THAT DELETES A PRODUCT FROM HE ACTIVE USERS DB NOT LINKED TO AN ORDER
          removeProduct(object);
        }
      );
    });
  });

  //Bobby: FROM MODEL, FETCHES STALE PRODUCTS
  

};
