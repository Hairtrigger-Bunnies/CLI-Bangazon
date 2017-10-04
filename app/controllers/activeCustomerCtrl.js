"use strict";

const { setActiveCustomer, getActiveCustomer } = require('../models/ActiveCustomer');
const { getCustomers } = require('../models/Customer');


const prompt = require("prompt");
const { red, magenta, blue } = require("chalk");
const colors = require("colors/safe");

module.exports.promptActiveCustomer = () => {
  return new Promise((resolve, reject) => {
    console.log("");
    //Josh: DISPLAYS EACH CUSTOMER FROM CUSTOMER MODEL TO SELECT
    getCustomers().then(data => {
      //Josh: THROWS DATA INTO ARRAY FOR REGEXP. CAN ONLY CHOOSE FROM AVAILABLE CUSTOMERS AND WILL NOW DISPLAY 1 - #
      let regArr = [];
      for (let i = 0; i < data.length; i++) {
        console.log(
          `  ${magenta([i + 1] + ".")} ${data[i].first_name} ${data[i].last_name}`)
          regArr.push(data[i].CustomerID);
      }
      // let reg = new RegExp('^[1-' + regArr.length + ']$');
      
      console.log("");
      prompt.get(
        [
          {
            // pattern: reg,
            // message: 'Please only enter an existing number',
            name: "id",
            description: "Choose customer to set active",
            type: "string",
            required: true
          }
        ],
        function(err, data) {
          if (err) return reject (err)
          data.customer_id = regArr[parseInt(data.id) - 1];
          
          resolve(data);
        }
      );
      //Josh: ^SETS ACTIVE CUSTOMER TO ID OF SELECTED FROM MODEL
    });
  });
};

module.exports.getActive = data => {
  getActiveCustomer(data);
};
