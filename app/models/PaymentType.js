"use strict";
const { Database } = require("sqlite3").verbose();

const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const dbPath = path.resolve(__dirname, "..", "..", "db", "bangazon.sqlite");
const db = new sqlite3.Database(dbPath);

const { getActiveCustomer } = require("./ActiveCustomer");

//Josh: TAKES VALUES FROM PAYTYPECTRL AND INSERTS TO DB
module.exports.addNewPaymentType = data => {
  console.log("data?", data);
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO Payment_Types (payment_type, account_number, customer_id) VALUES (
      '${data.type}', 
      '${data.accountNum}',
      '${data.customer_id}')`,
      //Josh: NEED TO INSERT ACTIVECUSTOMERID ^
      (err, Data) => {
        if (err) return reject(err);
        resolve(Data);
      }
    );
  });
};

//Josh: TO DUSPLAY ALL PAYTYPES. CALLED FROM ORDERCTRL WHEN SELECTING WHICH PAYTYPE TO USE
module.exports.getAllPaymentTypes = () => {
  return new Promise((resolve, reject) => {
    let customer_id = getActiveCustomer();
    db.all(
      `SELECT * FROM Payment_Types WHERE customer_id = ${customer_id}`,
      (err, Data) => {
        if (err) return reject(err);
        resolve(Data);
      }
    );
  });
};
