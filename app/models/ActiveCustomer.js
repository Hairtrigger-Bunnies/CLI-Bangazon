'use strict';
const path = require('path');
const sqlite3 = require("sqlite3").verbose();
const dbPath = path.resolve(__dirname, '..', '..', 'db', 'bangazon.sqlite');
const db = new sqlite3.Database('./db/bangazon.sqlite');



let activeCustomer = null;

//This function will be called by the controller with a number as it's argument
//Josh: PASS USERINPUT FROM CTRL TO SET CHOICE AS ACTIVE CUSTOMER VIA ID
module.exports.setActiveCustomer = (err, userInput) => {
  let activeCustomer = parseInt(userInput.name);
  console.log('(model) active customer =', activeCustomer); 
  //Josh: REQUIRING FUNC INSIDE FUNC TO LOOP PROMPT BACK TO START
  const { displayWelcome } = require('../ui');
  displayWelcome();
  return activeCustomer
}

module.exports.getActiveCustomer = () => {
  return activeCustomer
  // return new Promise( (resolve, reject) => {
  //   db.each(`SELECT * FROM customers WHERE CustomerID = ${activeCustomer}`, (err, data) => {
  //     if (err) return reject(err);
  //     resolve(data);
  //   });
  // });
};
