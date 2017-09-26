'use strict';

const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/bangazoncorp.sqlite');
const dbPath = path.resolve(__dirname, '..', '..', 'db', 'bangazon.sqlite');

module.exports.addSingleProduct = (body) => {
  return new Promise( (resolve, reject) => {
    db.run(`INSERT INTO Products (title, price, description, type_id, customer_id) VALUES (
      '${body.title}', 
      '${body.price}', 
      '${body.description}',
      '${body.type_id}',
      '${body.customer_id}')`, (err, products) => {
      if (err) {
        console.log("error", err);
        return reject(err);
      }
      resolve(products);
    });
  });
};