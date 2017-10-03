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

const { mainMenuHandler, customerMenuHandler } = require('./menuHandler');

prompt.start();

//Josh: THIS IS THE MENU ON STARTUP. ONLY ALLOWS CREATE CUSTOMER AND LOGIN
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
  `);
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

//Josh: THIS MENU ONLY DISPLAYS AFTER A CUSTOMER LOGS IN
const displayWelcomeForCustomer = () => {
  let headerDivider = `${magenta(
    "*********************************************************"
  )}`;
  return new Promise((resolve, reject) => {
    console.log(`
  ${headerDivider}
  ${magenta("**  Welcome to Bangazon! Command Line Ordering System  **")}
  ${headerDivider}
  ${magenta("1.")} Create a payment option
  ${magenta("2.")} Add product to sell
  ${magenta("3.")} Add product to shopping cart
  ${magenta("4.")} Complete an order
  ${magenta("5.")} Remove customer product
  ${magenta("6.")} Update product information
  ${magenta("7.")} Show stale products
  ${magenta("8.")} Show customer revenue report
  ${magenta("9.")} See product popularity
  ${magenta("10.")} Leave Bangazon!`);
    console.log("");
    prompt.get(
      [
        {
          name: "choice",
          description: "Please make a selection"
        }
      ],
      customerMenuHandler
    );
  });
};

module.exports = { displayWelcome, displayWelcomeForCustomer };
