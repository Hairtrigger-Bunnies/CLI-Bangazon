'use strict';
const path = require('path');
const sqlite3 = require("sqlite3").verbose();
const dbPath = path.resolve(__dirname, '..', '..', 'db', 'bangazon.sqlite');
const db = new sqlite3.Database('./db/bangazon.sqlite');

let activeCustomer = {
  id: null
}

//This function will be called by the controller with a number as it's argument
module.exports.setActiveCustomer = (id) => {
  activeCustomer.id = id;
}

module.exports.getActiveCustomer = () => {
  return new Promise( (resolve, reject) => {
    db.each(`SELECT * FROM customers WHERE CustomerID = ${activeCustomer.id}`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};