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

const { mainMenuHandler } = require('./menuHandler');

prompt.start();

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
