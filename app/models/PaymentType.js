'use strict';
const { Database } = require('sqlite3').verbose();
const { setActiveCustomer, getActiveCustomer } = require('../activeCustomer');

const path = require('path');
const sqlite3 = require("sqlite3").verbose();
const dbPath = path.resolve(__dirname, '..', '..', 'db', 'bangazon.sqlite');
const db = new sqlite3.Database(dbPath);

module.exports.addNewPaymentType = data => {
  console.log('data?', data);
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO Payment_Types (payment_type, account_number, customer_id) VALUES (
      '${data.type}', 
      '${data.accountNum}',
      '1')`,
      (err, Data) => {
        if (err) return reject(err);
        resolve(Data);
      }
    );
  });
};

module.exports.getAllPaymentTypes = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM Payment_Types`, (err, Data) => {
      if (err) return reject(err);
      resolve(Data);
    });
  });
};