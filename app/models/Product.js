'use strict';

const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/bangazon.sqlite');
const dbPath = path.resolve(__dirname, '..', '..', 'db', 'bangazon.sqlite');

const { getActiveCustomer } = require('./ActiveCustomer');



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

//Josh: RETURNS ALL PRODUCTS
module.exports.getAllProducts = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM Products`, (err, Data) => {
      if (err) return reject(err);
      resolve(Data);
    });
  });
};

//Josh: INSERTS PRODUCT AND ORDER INTO JOIN TABLE. 5 WILL BE UPDATED SOON
module.exports.addOrderProduct = (data) => {
  return new Promise( (resolve, reject) => {
    db.run(`INSERT INTO Order_Products (OrderID, ProductID) VALUES (
      5, 
      ${data.product_id})`, (err, data) => {
    if (err) return reject(err);
    resolve(data);
    })
  })
};

module.exports.removeProduct = (customerInput) => {
  return new Promise( (resolve, reject) => {
    db.run(`DELETE FROM Products WHERE ProductID = ${customerInput.ProductID}`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};

module.exports.getActiveProducts = () => {
  let customer_id = getActiveCustomer();
  return new Promise((resolve, reject) => {
    db.all(`SELECT Products.ProductID, Products.title, Products.price, Products.description, Products.customer_id FROM Products 
            LEFT OUTER JOIN Order_Products ON Products.ProductID = Order_Products.ProductID
            WHERE customer_id = ${customer_id} AND Order_Products.OrderProductID IS NULL;`, 
        (err, Data) => {
      if (err) return reject(err);
      resolve(Data);
    });
  });
};