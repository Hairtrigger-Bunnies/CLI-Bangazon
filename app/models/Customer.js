"use strict";
const { Database } = require("sqlite3").verbose();
const { setActiveCustomer, getActiveCustomer } = require("../activeCustomer");
const prompt = require("prompt");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const dbPath = path.resolve(__dirname, "..", "..", "db", "bangazon.sqlite");
const db = new sqlite3.Database(dbPath);

// function to insert new customer into the database, createNewCustomer with customer(custData from ui) passed in and declaring address so the three statements can go into one column (DR)
module.exports.createNewCustomer = customer => {
  // .split(" ") split the name on the space between first and last [0]= first name  in array [1]= second name in array
  let splitName = customer.name.split(" ");
  let address = `${customer.street}
  ${customer.city}
  ${customer.state}
  ${customer.zip}`;
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO customers VALUES (
        null,      
      "${splitName[0]}",
      "${splitName[1]}", 
      null,
      null, 
      null,
      "${address}",
      "${customer.phone}")`,
      (err, Customer) => {
        if (err) return reject(err);
        resolve(Customer);
      }
    );
  });
};
("use strict");
const { Database } = require("sqlite3").verbose();
const { setActiveCustomer, getActiveCustomer } = require("../activeCustomer");

const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const dbPath = path.resolve(__dirname, "..", "..", "db", "bangazon.sqlite");
const db = new sqlite3.Database(dbPath);
