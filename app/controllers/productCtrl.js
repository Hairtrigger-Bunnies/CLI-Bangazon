'use strict';

const prompt = require('prompt');
const { addNewProduct, getCustomerProducts } = require('../models/Product');
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
      resolve(results);
    })
  });
};

//Josh: FROM MODEL, ADDS PROD TO DB
module.exports.addProduct = (data) => {
  addNewProduct(data);
}

// AH & JT: FROM MODEL, UPDATES PROD TO DB
module.exports.promptUpdateProduct = (data) => {
  // updateProduct(data);
  return new Promise( (resolve, reject) => {
    getCustomerProducts()
    .then( (data) => {
      for (let i=0; i < data.length; i++) {
        console.log( `${magenta(i + 1 + ".")} ${data[i].title} hello`)
    }
      console.log("");
      prompt.get([{
            name: "name",
            description: "Select a product to update",
            type: "string",
            required: "true"
      }])
    });
  });
};

