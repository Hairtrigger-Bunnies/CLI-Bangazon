'use strict';

const prompt = require('prompt');
const { addNewPaymentType } = require('../models/PaymentType')

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

