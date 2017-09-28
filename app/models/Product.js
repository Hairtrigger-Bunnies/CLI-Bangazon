'use strict';

const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/bangazon.sqlite');
const dbPath = path.resolve(__dirname, '..', '..', 'db', 'bangazon.sqlite');


// Josh: TAKES PROMPTS AND INSERTS INTO DB
module.exports.addNewProduct = (data) => {
  return new Promise( (resolve, reject) => {
    db.run(`INSERT INTO Products (title, price, description, type_id, customer_id) VALUES (
      '${data.title}', 
      '${data.price}', 
      '${data.description}',
      '${data.type}',
      '${data.customer_id}')`, 
      //Josh: NEED TO INSERT ACTIVECUSTOMERID AND PERHAPS TYPE ID IF NEEDED^ 
        (err, Data) => {
        if (err) return reject(err);
        resolve(Data);
      }
    );
  });
};

//Josh: RETURNS ALL PRODUCTS, CURRENTLY NOT IN USE
module.exports.getAllProducts = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM Products`, (err, Data) => {
      if (err) return reject(err);
      resolve(Data);
    });
  });
};

module.exports.getCustomerProducts = () => {
  return new Promise( (resolve, reject) => {
    db.all('SELECT * FROM Products WHERE customer_id = 9', (err, Data) => {
      if (err) return reject(err);
      resolve(Data);
    });
  });
};

module.exports.getSingleProduct = () => {
  return new Promise( (resolve, reject) => {
    db.get('SELECT * FROM Products WHERE ProductId = 1', (err, Data) => {
      if (err) return reject(err);
      resolve(Data);
    });
  });
};