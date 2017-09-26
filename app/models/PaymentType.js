'use strict';
const { Database } = require('sqlite3').verbose();
const { setActiveCustomer, getActiveCustomer } = require('../activeCustomer');

const path = require('path');
const sqlite3 = require("sqlite3").verbose();
const dbPath = path.resolve(__dirname, 'bangazon.sqlite');
const db = new sqlite3.Database(dbPath);




module.exports.addNewPaymentType = (data) => {
  console.log('data?', data);
  // return new Promise((resolve, reject) => {
  //   db.run(
  //     `INSERT INTO Payment_Types (payment_type, account_number, customer_id) VALUES (
  //     '${data.type}', 
  //     '${data.accountNum}',
  //     null)`,
  //     (err, Data) => {
  //       if (err) return reject(err);
  //       resolve(Data);
  //     }
  //   );
  // });
};