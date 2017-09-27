'use strict';

const prompt = require('prompt');
const { addNewProduct } = require('../models/Product');
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
