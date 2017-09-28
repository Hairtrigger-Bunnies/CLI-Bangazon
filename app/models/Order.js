"use strict";
const { Database } = require("sqlite3").verbose();

const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const dbPath = path.resolve(__dirname, "..", "..", "db", "bangazon.sqlite");
const db = new sqlite3.Database(dbPath);

const { getActiveCustomer } = require("./ActiveCustomer");

// Josh: WILL CREATE ORDER WHEN ADDING A PRODUCT. WILL LATER CHECK IF ORDER EXISTS WHEN ADDING  MORE PRODUCTS
module.exports.getOrder = data => {
  console.log("data?", data);
  // return new Promise( (resolve, reject) => {
  // 	db.all(`SELECT * FROM Orders
  // 					LEFT JOIN Order_Products ON Orders.OrderID = Order_Products.OrderID
  // 					LEFT JOIN Products ON Products.ProductID = Order_Products.ProductID
  //           WHERE Orders.OrderID = ${id}`, (err, single) => {
  // 		if (err) return reject(err);
  // 		resolve(addProductOrder(single));
  // 		// else return reject("Sorry, order doesn't exist");
  // 	});
  // });
};

module.exports.addOrderProduct = data => {
  return new Promise((resolve, reject) => {
    //Josh: WILL NEED TO SET ORDER ID TO EQUAL ACTUAL ORDERID
    db.run(
      `INSERT INTO Order_Products (OrderID, ProductID) VALUES (
      5, 
      ${data.name})`,
      (err, data) => {
        if (err) return reject(err);
        resolve(data);
      }
    );
  });
};

//Josh: THIS FUNCTION INSERTS CHOSEN PAYMENT TYPE TO ORDER
module.exports.addPaymentTypeToOrder = data => {
  let customer_id = getActiveCustomer();
  return new Promise((resolve, reject) => {
    db.run(`INSERT INTO Orders (payment_type_id) VALUES (
			${data.name}
		)
		WHERE Orders.customer_id = ${customer_id} and payment_type_id = null`);
  });
};
