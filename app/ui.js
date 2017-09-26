'use strict';

// 3rd party libs
const {red, magenta, blue} = require("chalk");
const prompt = require('prompt');
const colors = require("colors/safe");
const path = require('path');
const { Database } = require('sqlite3').verbose();
prompt.message = colors.blue("Bangazon Corp");

// app Ctrls
const { promptNewCustomer } = require('./controllers/customerCtrl');
const { promptNewOrder } = require('./controllers/orderCtrl');
// const { promptNewProduct } = require('./controllers/productCtrl');
const { promptNewPayment } = require('./controllers/paymentCtrl');

//app Models
const { addNewPaymentType } = require('./models/PaymentType');

const db = new Database(path.join(__dirname, '..', 'db', 'bangazon.sqlite'));

prompt.start();

let mainMenuHandler = (err, userInput) => {
  console.log("user input", userInput);
  // This could get messy quickly. Maybe a better way to parse the input?
  if(userInput.choice == '1') {
    promptNewCustomer()
    .then( (custData) => {
      console.log('customer data to save', custData );
      //save customer to db
    });
  }
  // if(userInput = '2') {
  //   promptChooseCustomer()
  //   .then( (custData) => {
  //     console.log('choose customer', custData );
  //     //save customer to db
  //   });
  // }
  if(userInput = '3') {
    promptNewPayment()
    .then( (custData) => {
      console.log('Payment option to save', custData );
      addNewPaymentType(custData);      
    });
  }
  // if(userInput = '4') {
  //   promptChooseProduct()
  //   .then( (custData) => {
  //     console.log('choose product to add', custData );
  //   });
  // }
  if(userInput.choice == '5') {
    promptNewOrder()
    .then( (custData) => {
      console.log('order data to save', custData );
    });
  }
};

module.exports.displayWelcome = () => {
  let headerDivider = `${magenta('*********************************************************')}`
  return new Promise( (resolve, reject) => {
    console.log(`
  ${headerDivider}
  ${magenta('**  Welcome to Bangazon! Command Line Ordering System  **')}
  ${headerDivider}
  ${magenta('1.')} Create a customer account
  ${magenta('2.')} Choose active customer
  ${magenta('3.')} Create a payment option
  ${magenta('4.')} Add product to shopping cart
  ${magenta('5.')} Complete an order
  ${magenta('6.')} See product popularity
  ${magenta('7.')} Leave Bangazon!`);
    prompt.get([{
      name: 'choice',
      description: 'Please make a selection'
    }], mainMenuHandler );
  });
};
