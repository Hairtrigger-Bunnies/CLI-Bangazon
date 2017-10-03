"use strict";

const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/bangazon.sqlite");
const dbPath = path.resolve(__dirname, "..", "..", "db", "bangazon.sqlite");

const { getActiveCustomer } = require("./ActiveCustomer");

// Josh: TAKES PROMPTS AND INSERTS INTO DB
module.exports.addNewProduct = data => {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO Products (title, price, description, type_id, customer_id) VALUES (
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
module.exports.addOrderProduct = data => {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO Order_Products (OrderID, ProductID) VALUES (
      5, 
      ${data.product_id})`,
      (err, data) => {
        if (err) return reject(err);
        resolve(data);
      }
    );
  });
};

//Bobby: REMOVES PRODUCT FROM ACTIVE CUSTOMERS DATABASE THAT IS NOT IN A PRODUCT ORDER
module.exports.removeProduct = customerInput => {
  return new Promise((resolve, reject) => {
    db.run(
      `DELETE FROM Products WHERE ProductID = ${customerInput.ProductID}`,
      (err, data) => {
        if (err) return reject(err);
        resolve(data);
      }
    );
  });
};

//Bobby: FETCHES AND DISPLAYS ALL ACTIVE CUSTOMER'S PRODUCSTS WHEN ENTERED
module.exports.getActiveProducts = () => {
  let customer_id = getActiveCustomer();
  return new Promise((resolve, reject) => {
    db.all(
      `SELECT Products.ProductID, Products.title, Products.price, Products.description, Products.customer_id FROM Products 
            LEFT OUTER JOIN Order_Products ON Products.ProductID = Order_Products.ProductID
            WHERE customer_id = ${customer_id} AND Order_Products .OrderProductID IS NULL;`,
      (err, Data) => {
        if (err) return reject(err);
        resolve(Data);
      }
    );
  });
};


//Jevon & Aspen: GETS THE ACTIVE CUSTOMER'S PRODUCTS
module.exports.getCustomerProducts = () => {
  let customer_id = getActiveCustomer();
  if ( customer_id !== undefined ) {
    return new Promise( (resolve, reject) => {
      db.all(`SELECT * FROM Products WHERE customer_id = ${customer_id}`, (err, Data) => {
        if (err) return reject(err);
        resolve(Data);
      });
    });
  } else {
    const { displayWelcome } = require('../ui');
    displayWelcome();
  };
};

//Jevon & Aspen: PUTS THE UPDATED PRODUCT TO THE DATABASE
module.exports.putUpdatedProduct = (product) => {
  return new Promise((resolve, reject) => {
    db.run(`UPDATE Products
            SET title = "${product.title}", price = ${product.price}, description = "${product.description}", quantity = "${product.quantity}"
            WHERE ProductID = ${product.ProductID}`, 
        (err, Data) => {
      if (err) return reject(err);
      resolve(Data);
    });
  });
};
 // (DR/Bobby) getStaleProducts gets product not on an order 180 day old resolves data for menuhandler
module.exports.getStaleProducts = () => {
  return new Promise((resolve, reject) => {
    db.all(
      `SELECT DISTINCT p.ProductID, p.title, p.price, p.description, p.customer_id, o.order_date, o.payment_type_id  FROM Products p
      LEFT JOIN Orders o ON p.customer_id = o.customer_id 
      LEFT JOIN Order_Products op WHERE p.ProductID = op.ProductID 
      AND o.order_date < date('now', '-3 months')  
      AND o.payment_type_id IS null
      OR o.order_date IS null`,
      (err, Data) => {
        if (err) return reject(err);
        resolve(Data);
      }
    );
  });
};
