"use strict";
const { Database } = require("sqlite3").verbose();
const prompt = require("prompt");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const dbPath = path.resolve(__dirname, "..", "..", "db", "bangazon.sqlite");
const db = new sqlite3.Database(dbPath);
const { getActiveCustomer } = require("./ActiveCustomer");

// function to insert new customer into the database, createNewCustomer with customer(custData from ui) passed in and declaring address so the three statements can go into one column (DR)
module.exports.createNewCustomer = customer => {
  // .split(" ") split the name on the space between first and last [0]= first name  in array [1]= second name in array. added the created_date with the Date/toISOString method so a correct date is attached to the creation of the customer (DR)
  let d = new Date();
  let creation_date = d.toISOString();
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
      "${creation_date}",
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

// (DR) Function to get all customers from the customer table and resolves Data
module.exports.getCustomers = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM Customers`, (err, Data) => {
      if (err) return reject(err);
      resolve(Data);
    });
  });
};

// (DR) function getCustRevenue is bringing back the revenue associated with the customer_id when you choose an active customer in the prompt
module.exports.getCustRevenue = () => {
  return new Promise((resolve, reject) => {
    // (DR) Using getActiveCustomer to grab the customer_id
    let customer_id = getActiveCustomer();
    db.all(
      `select op.orderProductId, p.title, o.customer_id, o.payment_type_id,
      count(p.title) as Quantity,
      sum(p.price) as Revenue
      from products p    
      left join Order_Products op
      on p.productId = op.productId
      left join orders o
      on o.orderId = op.orderId AND o.payment_type_id IS NOT null
        WHERE o.customer_id = "${customer_id}"
      GROUP by o.payment_type_id`,
      (err, Data) => {
        if (err) return reject(err);
        resolve(Data);
      }
    );
  });
};
