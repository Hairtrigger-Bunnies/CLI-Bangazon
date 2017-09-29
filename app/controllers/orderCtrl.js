'use strict';

const prompt = require('prompt');
const { getAllPaymentTypes } = require('../models/PaymentType')
const { getAllProducts } = require('../models/Product');
const { addOrderProduct, addPaymentTypeToOrder, getOrderID, createOrder, checkForExistingOrder } = require('../models/Order');
const { getActiveCustomer } = require('../models/ActiveCustomer');
const {red, magenta, blue} = require("chalk");
const colors = require("colors/safe");

//Josh: IS USED TO ADD PAYTYPE TO ORDER FOR COMPLETING IT
module.exports.promptCompleteOrder = () => {
  return new Promise( (resolve, reject) => {
    console.log('');
    //Josh: DISPLAYS EACH PAYMENT TYPE FROM PAYTYPE MODEL TO SELECT
    getAllPaymentTypes()
      .then( (data) => {
        for(let i = 0; i < data.length; i++) {
          console.log(`  ${magenta(data[i].PaymentTypeID+'.')} ${data[i].payment_type} ${data[i].account_number}`)
        }
        console.log('');
        //Josh: WILL NEED TO CHOOSE CORRECT PAYMENT ID. EX 1 FOR CUSTOMER 1 WILL BE DIFFERENT THAN 1 FOR CUSTOMER 2. WHEN ADDING PAYTYPE TO ORDER IT WILL SELECT WRONG PAYTYPE 
        prompt.get([{
          name: 'name',
          description: 'Choose type of payment',
          type: 'string',
          required: true
        }], function(err, results) {
          if (err) return reject(err);
          //Josh: ADDS ACTIVE CUSTOMER ID TO RESULTS
          results.customer_id = getActiveCustomer();
          resolve(results);
      })
    });
  });
};

//Josh: THIS SHOWS PRODUCTS TO SELECT AND ADDS TO ORDER. WILL CHECK FOR EXISTING ORDER. LATER, WILL ALLOW SELECT MULTIPLE
module.exports.promptAddProductToOrder = () => {
  return new Promise( (resolve, reject) => {
    console.log('');
    getAllProducts()
    .then( (data) => {
      for(let i = 0; i < data.length; i++) {
        console.log(`  ${magenta(data[i].ProductID+'.')} ${data[i].title} ${data[i].price} ${data[i].description}`)
      }
      console.log('');
      prompt.get([{
        name: 'name',
        description: 'Choose product to add to order',
        type: 'string',
        required: true
      }], function(err, results) {
        if (err) return reject(err);
        //Josh: ADDS ACTIVE CUSTOMER ID TO RESULTS
        results.customer_id = getActiveCustomer();
        resolve(results);
      })
    });
  });
};

//Josh: DEPENDING ON WHICH INPUT, WILL PASS ALONG PAYTYPEID TO FUNCTION
module.exports.paymentHandler = (userInput) => {
  addPaymentTypeToOrder(userInput);
}

let existingOrder;

//Josh: ADDS PRODUCT. CHECKS IF ORDER EXISTS OR NOT
module.exports.addProductToOrder = (userInput) => {
  checkForExistingOrder().then( (data) => {
    if(data == undefined) {
      createOrder(userInput)
      .then( (data) => {
        addOrderProduct(data);
      });
    } else {
      //Josh: SINCE YOU CAN'T PASS THIS.LASTID AND INPUTDATA TOGETHER, CREATE A VARIABLE TO TAKE BOTH
      existingOrder = {
        id: data,
        name: userInput.name
      }
      addOrderProduct(existingOrder);   
    }
  }) 
};