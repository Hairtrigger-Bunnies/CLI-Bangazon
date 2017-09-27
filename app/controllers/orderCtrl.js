'use strict';

const prompt = require('prompt');
const { getAllPaymentTypes } = require('../models/PaymentType')
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
          console.log(`  ${magenta(i+1+'.')} ${data[i].payment_type} ${data[i].account_number}`)
        }
        console.log('');
        prompt.get([{
          name: 'name',
          description: 'Choose type of payment',
          type: 'string',
          required: true
        }], paymentHandler );
    })
  });
};

//Josh: DEPENDING ON WHICH INPUT, WILL PASS ALONG PAYTYPEID TO FUNCTION
let paymentHandler = (err, userInput) => {
  console.log('you chose', userInput.name);
}
