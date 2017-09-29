'use strict';
const path = require('path');
const sqlite3 = require("sqlite3").verbose();
const dbPath = path.resolve(__dirname, '..', '..', 'db', 'bangazon.sqlite');
const db = new sqlite3.Database('./db/bangazon.sqlite');



let activeCustomer;

//This function will be called by the controller with a number as it's argument
//Josh: PASS USERINPUT FROM CTRL TO SET CHOICE AS ACTIVE CUSTOMER VIA ID
module.exports.setActiveCustomer = (userInput) => {
  console.log('userinput', userInput);
  activeCustomer = userInput.id;
}

//Josh: CALL THIS TO GET CUSTOMERID VALUE
module.exports.getActiveCustomer = () => {
  return activeCustomer
};
