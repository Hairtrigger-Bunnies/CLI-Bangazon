"use strict";

// 3rd party libs
const { red, magenta, blue } = require("chalk");
const prompt = require("prompt");
const colors = require("colors/safe");
const { Database } = require("sqlite3").verbose();
prompt.message = colors.blue("Bangazon Corp");

const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const dbPath = path.resolve(__dirname, "..", "db", "bangazon.sqlite");
const db = new sqlite3.Database(dbPath);

// app Ctrls
const { promptNewCustomer } = require("./controllers/customerCtrl");
const { promptCompleteOrder } = require("./controllers/orderCtrl");
const { promptActiveCustomer, getActive } = require("./controllers/activeCustomerCtrl");
const { promptNewProduct, addProduct, promptRemoveSingleProduct } = require("./controllers/productCtrl");
const { promptNewPayment, addPayment } = require("./controllers/paymentCtrl");
const { setActiveCustomer } = require('./models/ActiveCustomer');

// app models
const { createNewCustomer } = require("./models/Customer");

prompt.start();

let mainMenuHandler = (err, userInput) => {
  console.log("user input", userInput);
  if (userInput.choice == "1") {
    // calling promptNewCustomer when user inputs 1 (DR)
    promptNewCustomer().then(custData => {
      //calling createNewCustomer with custData passed into it (DR)
      createNewCustomer(custData);
      console.log("customer data to save", custData);
      //save customer to db
      module.exports.displayWelcome();            
    });
  }
  //Josh: SELECT CUSTOMER TO SET ACTIVE
  if (userInput.choice == "2") {
    promptActiveCustomer().then(custData => {
      console.log("active customer", custData.id);
      //Josh: SETS ACTIVE CUSTOMER BASED ON PROMPT
      setActiveCustomer(custData);
      module.exports.displayWelcome();
    });
  }
  if (userInput.choice == "3") {
    //Josh: CALLS PROMPTS FROM PAYMENTCTRL
    promptNewPayment().then(payData => {
      console.log("Payment option to save", payData);
      //Josh: CALLS CONTROLLER FUNC TO ADD DATA TO DB
      addPayment(payData);
      module.exports.displayWelcome();      
    });
  }
  if (userInput.choice == "4") {
    promptNewProduct().then(prodData => {
      console.log("choose product to add", prodData);
      //Josh: BRINGS IN PROMPT DATA TO ADD TO DB
      addProduct(prodData);
      module.exports.displayWelcome();
    });
  }
  if (userInput.choice == "6") {
    //Josh: CALLS PROMPTS FROM ORDERCTRL
    promptCompleteOrder().then(orderData => {
      console.log("order data to save", orderData);
      module.exports.displayWelcome();            
    });
  }
  if (userInput.choice == "7") {
    //Bobby: Removes a product from the system
    promptRemoveSingleProduct(userInput.choice).then(prodData => {
      console.log("Remove product from the system", prodData);
      module.exports.displayWelcome();
    });
  }

};

const displayWelcome = () => {
  let headerDivider = `${magenta(
    "*********************************************************"
  )}`;
  return new Promise((resolve, reject) => {
    console.log(`
  ${headerDivider}
  ${magenta("**  Welcome to Bangazon! Command Line Ordering System  **")}
  ${headerDivider}
  ${magenta("1.")} Create a customer account
  ${magenta("2.")} Choose active customer
  ${magenta("3.")} Create a payment option
  ${magenta("4.")} Add product to sell
  ${magenta("5.")} Add product to shopping cart
  ${magenta("6.")} Complete an order
  ${magenta("7.")} Remove customer product
  ${magenta("8.")} Update product information
  ${magenta("9.")} Show stale products
  ${magenta("10.")} Show customer revenue report
  ${magenta("11.")} See product popularity
  ${magenta("12.")} Leave Bangazon!`);
    console.log("");
    prompt.get(
      [
        {
          name: "choice",
          description: "Please make a selection"
        }
      ],
      mainMenuHandler
    );
  });
};

module.exports = { displayWelcome };
