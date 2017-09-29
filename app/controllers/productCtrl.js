"use strict";

const prompt = require("prompt");
const {
  addNewProduct,
  getCustomerProducts,
  getSingleProduct
} = require("../models/Product");
const { getActiveCustomer } = require("../models/ActiveCustomer");
const { red, magenta, blue } = require("chalk");
const colors = require("colors/safe");

// Josh: PROMPTS FOR NEW PRODUCT
module.exports.promptNewProduct = (req, res, next) => {
  return new Promise((resolve, reject) => {
    prompt.get(
      [
        {
          name: "title",
          description: "Enter product name",
          type: "string",
          required: true
        },
        {
          name: "price",
          description: "Enter price",
          type: "string",
          required: true
        },
        {
          name: "description",
          description: "Enter description of product",
          type: "string",
          required: true
        },
        {
          name: "type",
          description: "Enter product type",
          type: "string",
          required: true
        }
      ],
      function(err, results) {
        if (err) return reject(err);
        //Josh: ADDS CUSTOMER ID TO RESULTS
        results.customer_id = getActiveCustomer();
        resolve(results);
      }
    );
  });
};

//Josh: FROM MODEL, ADDS PROD TO DB
module.exports.addProduct = data => {
  addNewProduct(data);
};

// AH & JT: FROM MODEL, UPDATES PROD TO DB
module.exports.promptUpdateProduct = data => {
  let productUpdateArray = [];
  // updateProduct(data);
  return new Promise((resolve, reject) => {
    getCustomerProducts().then(data => {
      for (let i = 0; i < data.length; i++) {
        data[i].updateProductID = i + 1;
        productUpdateArray.push(data[i]);
        console.log(`${magenta(i + 1 + ".")} ${data[i].title}`);
      }
      console.log("");
      prompt.get(
        [
          {
            name: "name",
            description: "Select a product to update",
            type: "string",
            required: "true"
          },
          {
            name: "title",
            description: "Select a Title to update",
            type: "string",
            required: "true"
          }
        ],
        function(err, data) {
          if (err) return reject(err);
          resolve(data);
          let object = productUpdateArray[parseInt(`${data.name}` - 1)];
          getSelectedProduct(object);
        }
      );
    });
  });
};

let getSelectedProduct = prodObject => {
  return new Promise((resolve, reject) => {
    console.log(`${magenta(1 + ".")} Title "${prodObject.title}"`);
    console.log(`${magenta(2 + ".")} Price "${prodObject.price}"`);
    console.log(`${magenta(3 + ".")} Description "${prodObject.description}"`);
    console.log("");
    prompt.get(
      [
        {
          name: "name",
          description: "Select an option",
          type: "string",
          required: "true"
        }
      ],
      function(err, data) {
        if (err) return reject(err);
        resolve(data);
      }
    );
  });
};
