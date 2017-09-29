'use strict';

const prompt = require('prompt');
const { getAllProducts, removeSingleProduct, getActiveProducts, removeProduct, addNewProduct, getCustomerProducts, getSingleProduct, putUpdatedProduct } = require('../models/Product');
const { getActiveCustomer } = require('../models/ActiveCustomer');
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
      //Josh: WILL NEED TO DISPLAY PRODUCT TYPE NAMES SO USER KNOWS WHAT THEY ARE
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


// AH & JT: FROM MODEL, UPDATES PROD TO DB
module.exports.promptUpdateProduct = (data) => {
  let productUpdateArray = [];
  // updateProduct(data);
  return new Promise( (resolve, reject) => {
    getCustomerProducts()
    .then( (data) => {
      console.log("");
      for (let i=0; i < data.length; i++) {
        data[i].updateProductID = i + 1;
        productUpdateArray.push(data[i]);
        console.log( `${magenta(i + 1 + ".")} ${data[i].title}`)
      }
      console.log("");
      prompt.get([
        {
          name: "name",
          description: "Select a product to update",
          type: "string",
          required: "true"
        }
      ],
      function(err, data) {
        if (err) return reject (err)
          resolve(data);
        let object = productUpdateArray[parseInt(`${data.name}` - 1)];
        getSelectedProduct(object);
      }
    )
  });
});
};

let getSelectedProduct = (prodObject) => {
  let object = prodObject;
  return new Promise( (resolve, reject) => {
    console.log("");
    console.log( `${magenta(1 + ".")} Title "${prodObject.title}"`);
    console.log( `${magenta(2 + ".")} Price "$${prodObject.price}"`);
    console.log( `${magenta(3 + ".")} Description "${prodObject.description}"`);
    console.log( `${magenta(4 + ".")} Save`);
    console.log( `${magenta(5 + ".")} Return to Main Menu`);
    console.log("");
    prompt.get([
      {
        name: "title",
        description: `Select a category to update`,
        type: "string",
        required: "true"
      }
    ],
    function(err, data) {
      if (err) return reject (err)
        resolve(data);
      if (data.title == "1") {
        prompt.get([
          {
            name: "title",
            description: `Change Title`,
            type: "string",
            required: "true"
          }
        ],
        function(err, data) {
          if (err) return reject (err)
                     object.title = data.title;
          getSelectedProduct(object);
            resolve(data);
        })
      } else if (data.title == "2") {
        prompt.get([
          {
            name: "title",
            description: `Change Price`,
            type: "string",
            required: "true"
          }
        ],
        function(err, data) {
          if (err) return reject (err)
            object.price = data.title;
          getSelectedProduct(object);
            resolve(data);
        })
      } else if (data.title == "3") {
        prompt.get([
          {
            name: "title",
            description: `Change Description`,
            type: "string",
            required: "true"
          }
        ],
        function(err, data) {
          if (err) return reject (err)
            object.description = data.title;
          getSelectedProduct(object);
            resolve(data);
        })
      } else if (data.title == "4") {
        putUpdatedProduct(object);
        const { displayWelcome } = require('../ui');
        displayWelcome();
      } else if (data.title == "5") {
        const { displayWelcome } = require('../ui');
        displayWelcome();
      } else {
        getSelectedProduct(object);
        console.log("Please select one of the available options")
      }
    })
  })
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
    })
  })
};
