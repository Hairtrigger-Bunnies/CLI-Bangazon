"use strict";

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
const { promptCompleteOrder, promptAddProductToOrder, addProductToOrder, paymentHandler } = require("./controllers/orderCtrl");
const { promptActiveCustomer, getActive } = require("./controllers/activeCustomerCtrl");
const { promptNewProduct, addProduct, promptGetActiveUserProducts, promptUpdateProduct, listStaleProducts } = require("./controllers/productCtrl");
const { promptNewPayment, addPayment } = require("./controllers/paymentCtrl");
const { setActiveCustomer } = require("./models/ActiveCustomer");

// app models
const { createNewCustomer, getCustRevenue } = require("./models/Customer");
const { getStaleProducts } = require("./models/Product");



module.exports.mainMenuHandler = (err, userInput) => {
  if (userInput.choice == "1") {
    // calling promptNewCustomer when user inputs 1 (DR)
    promptNewCustomer().then(custData => {
      //calling createNewCustomer with custData passed into it (DR)
      createNewCustomer(custData);
      console.log("customer data to save", custData);
      //save customer to db
      const { displayWelcome } = require("./ui");
      displayWelcome();
    });
  } else if (userInput.choice === "2") {
    //Josh: SELECT CUSTOMER TO SET ACTIVE
    promptActiveCustomer().then(custData => {
      console.log("active customer", custData.id);
      //Josh: SETS ACTIVE CUSTOMER BASED ON PROMPT
      setActiveCustomer(custData);
      const { displayWelcome } = require("./ui");
      displayWelcome();
    });
  } else if (userInput.choice == "3") {
    //Josh: CALLS PROMPTS FROM PAYMENTCTRL
    promptNewPayment().then(payData => {
      console.log("Payment option to save", payData);
      //Josh: CALLS CONTROLLER FUNC TO ADD DATA TO DB
      addPayment(payData);
      const { displayWelcome } = require("./ui");
      displayWelcome();
    });
  } else if (userInput.choice == "4") {
    promptNewProduct().then(prodData => {
      console.log("choose product to add", prodData);
      //Josh: BRINGS IN PROMPT DATA TO ADD TO DB
      addProduct(prodData);
      const { displayWelcome } = require("./ui");
      displayWelcome();
    });
  } else if (userInput.choice == "5") {
    promptAddProductToOrder().then(prodData => {
      console.log("choose product to add to order", prodData);
      //Josh: BRINGS IN PROMPT DATA TO ADD TO DB
      addProductToOrder(prodData);
      const { displayWelcome } = require("./ui");
      displayWelcome();
    });
  }

  else if (userInput.choice == "6") {
    //Josh: CALLS PROMPTS FROM ORDERCTRL
    promptCompleteOrder().then(orderData => {
      console.log("order data to save", orderData);
      paymentHandler(orderData);
      const { displayWelcome } = require("./ui");
      displayWelcome();
    });
  } else if (userInput.choice == "7") {
    //Bobby: Removes a product from the system
    promptGetActiveUserProducts(userInput.choice).then(prodData => {
      console.log("Remove product from the system", prodData);
      const { displayWelcome } = require("./ui");
      displayWelcome();
    });
  }
  else if (userInput.choice == "8") {
    // AH & JT CALLS PROMPTS FROM PRODUCTSCTRL
    promptUpdateProduct();
  }
  else if (userInput.choice == "9") {
   //(DR) calls getStaleProducts from product model
      listStaleProducts();
      // const { displayWelcome } = require("./ui");
      // displayWelcome();
    
  }
  else if (userInput.choice == "10") {
    //(DR) calls getCustRevenue from customer model
    getCustRevenue().then(Data => {
      console.log("Data", Data);
      const { displayWelcome } = require("./ui");
      displayWelcome();
    });
  }
  else if (userInput.choice == '12'){
    console.log('Thank you for using Bangazon!');
  }
  else {
    //Josh: FORCES USER TO SELECT AVAILABLE NUMBER
    const { displayWelcome } = require("./ui");
    displayWelcome();
    console.log("Please select a number");    
  }
};


//getStaleProducts().then(Data => {
  //console.log("Data", Data);