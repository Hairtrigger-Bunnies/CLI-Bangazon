'use strict';
const { Database } = require('sqlite3').verbose();

const path = require('path');
const sqlite3 = require("sqlite3").verbose();
const dbPath = path.resolve(__dirname, '..', '..', 'db', 'bangazon.sqlite');
const db = new sqlite3.Database(dbPath);

const { getActiveCustomer } = require('./ActiveCustomer');


// Josh: WILL CREATE ORDER WHEN ADDING A PRODUCT. WILL LATER CHECK IF ORDER EXISTS WHEN ADDING  MORE PRODUCTS
module.exports.createOrder = (data) => {
	let customer_id = getActiveCustomer();
	let order_date = new Date().toISOString();	
  return new Promise( (resolve, reject) => {
		db.run(`INSERT INTO Orders (order_date, payment_type_id, customer_id) VALUES (
			'${order_date}',
			null,
			${customer_id}
		)`, function(err) {
			if (err) return reject(err);
			let newOrderData = {
				id: this.lastID,
				name: data.name
			}
			resolve(newOrderData);
			//Josh: ^RETURNS ORDERID
		})
  })
};

//Josh: CHECKS IS USER HAS EXISTING ORDER OR NOT
module.exports.checkForExistingOrder = () => {
	let customer_id = getActiveCustomer();	
	return new Promise( (resolve, reject) => {
		//Josh: SELECT STATEMENT FOR OPEN ORDER WITH CUSTOMER ID. WILL RESOLVE UNDEFINED OR THE ORDER ID VALUE
		db.get(`SELECT OrderID FROM Orders WHERE customer_id = ${customer_id} and payment_type_id IS NULL`, (err, data) => {
			if (err) return reject(err);
			if (data == undefined) {
				resolve(data)
			} else {
				//Josh: RENAME RESULTS TO MATCH UP WITH WHAT NEW ORDER DATA WOULD LOOK LIKE
				let id = data.OrderID
				resolve(id);
			}
		})
	})
}


module.exports.addOrderProduct = (data) => {
  return new Promise( (resolve, reject) => {
		//Josh: WILL TAKE EITHER EXISTING ORDERID OR CREATED ORDER ID FROM CONTROLLER
    db.run(`INSERT INTO Order_Products (OrderID, ProductID) VALUES (
      ${data.id}, 
      ${data.name})`, (err, data) => {
    if (err) return reject(err);
    resolve(data);
    })
  })
};

//Josh: THIS FUNCTION INSERTS CHOSEN PAYMENT TYPE TO ORDER
module.exports.addPaymentTypeToOrder = (data) => {
	let customer_id = getActiveCustomer();
	return new Promise( (resolve, reject) => {
		db.run(`UPDATE Orders 
						SET payment_type_id = ${data.paytype_id}
						WHERE payment_type_id is null and customer_id = ${customer_id}`)
	})
}