'use strict';

const prompt = require('prompt');
const { addNewPaymentType } = require('../models/PaymentType');
const { getActiveCustomer } = require('../models/ActiveCustomer');

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
      //Josh: ADDS ACTIVE CUSTOMER ID TO RESULTS
      results.customer_id = getActiveCustomer();
      resolve(results);
    })
  });
};

//Josh: CALLS MODEL FUNC TO ADD PAYTYPE TO DB
module.exports.addPayment = (data) => {
  addNewPaymentType(data);
}

