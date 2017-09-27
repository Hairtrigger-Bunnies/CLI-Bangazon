'use strict';

const prompt = require('prompt');
const { addNewProduct } = require('../models/Product');
const { getActiveCustomer } = require('../models/ActiveCustomer');
const { removeSingleProduct } = require('../models/Product');

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
module.exports.removeProduct = (data) => {
  removeSingleProduct(data);
}
