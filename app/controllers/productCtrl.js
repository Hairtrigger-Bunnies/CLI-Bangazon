'use strict';

const prompt = require('prompt');
const { addNewProduct } = require('../models/Product');
const { getActiveCustomer } = require('../models/ActiveCustomer');
const { getAllProducts, removeSingleProduct } = require('../models/Product');
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

//Bobby: FROM MODEL, REMOVES PRODUCT FROM ACTIVE USER DB
module.exports.promptRemoveSingleProduct = (userInput) => {
  return new Promise( (resolve, reject) => {
    getAllProducts().then(data => {
      for (let i = 0; i < data.length; i++) {
        console.log(`${magenta(i + 1 + ".")} ${data[i].title}`)
      }
      console.log("");
      prompt.get(
        [
          {
            name: "id",
            description: "Select a product to remove from the system",
            type: "string",
            required: true
          }
        ],
        function(err, data) {
          if (err) return reject (err)
          resolve(data)
        }
      );
    })
  })
};
