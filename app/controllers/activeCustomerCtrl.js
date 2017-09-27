'use strict';

const { setActiveCustomer, getActiveCustomer } = require('../models/ActiveCustomer');
const { getCustomers } = require('../models/Customer');

const prompt = require('prompt');
const {red, magenta, blue} = require("chalk");
const colors = require("colors/safe");

module.exports.promptActiveCustomer = () => {
  return new Promise( (resolve, reject) => {
    console.log('');
    //Josh: DISPLAYS EACH CUSTOMER FROM CUSTOMER MODEL TO SELECT
    getCustomers()
      .then( (data) => {
        for(let i = 0; i < data.length; i++) {
          console.log(`  ${magenta(i+1+'.')} ${data[i].first_name} ${data[i].last_name}`)
        }
        console.log('');
        prompt.get([{
          name: 'name',
          description: 'Choose customer to set active',
          type: 'string',
          required: true
        }], setActiveCustomer );
        //Josh: ^SETS ACTIVE CUSTOMER TO ID OF SELECTED FROM MODEL
    })
  });
};

module.exports.getActive = (data) => {
  getActiveCustomer(data);
}