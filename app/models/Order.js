'use strict';
const { Database } = require('sqlite3').verbose();
const { setActiveCustomer, getActiveCustomer } = require('../activeCustomer');

const path = require('path');
const sqlite3 = require("sqlite3").verbose();
const dbPath = path.resolve(__dirname, '..', '..', 'db', 'bangazon.sqlite');
const db = new sqlite3.Database(dbPath);

// Josh: WHEN VIEWING ORDER THIS WILL BE CALLED. WILL JOIN PAYTYPE ETC TO ORDER
module.exports.getOrder = (data) => {
  console.log('data?', data);
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