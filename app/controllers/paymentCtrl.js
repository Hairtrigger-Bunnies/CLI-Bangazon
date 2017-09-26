'use strict';

const prompt = require('prompt');
const { addNewPaymentType } = require('../models/PaymentType')

//Josh: USE TO ENTER IN TYPE AND ACC NUM TO CREATE NEW PAYTYPE
module.exports.promptNewPayment = () => {
  return new Promise( (resolve, reject) => {
    prompt.get([{
      name: 'type',
      description: 'Enter payment type (Visa, Amex, etc.)',
      type: 'string',
      required: true
    }, {
      name: 'accountNum',
      description: 'Enter account number',
      type: 'string',
      required: true
    }], function(err, results) {
      if (err) return reject(err);
      resolve(results);
    })
  });
};

//Josh: CALLS MODEL FUNC TO ADD PAYTYPE TO DB
module.exports.addPayment = (data) => {
  addNewPaymentType(data);
}

