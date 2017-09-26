const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.database("db/bangazon.sqlite");

//requiring in data for tables
const { product_types } = require("../data/product_types");
const { generateCustomers } = require("../data/customers");
const { generateProducts } = require("../data/products");
const { generatePaymentTypes } = require("../data/payment_types");
const { generateOrders } = require("../data/orders");
const { generateOrderProducts } = require("../data/order_products");

// Create collections...
let customers = generateCustomers();
let products = generateProducts(product_types.length, customers.length);
let payment_types = generatePaymentTypes(customers.length);
let orders = generateOrders(payment_types, customers);
let order_products = generateOrderProducts(orders, products);

db.serialize(function() {
  // Need to drop in this order
  db.run(`DROP TABLE IF EXISTS Products`);
  db.run(`DROP TABLE IF EXISTS Payment_Types`);
  db.run(`DROP TABLE IF EXISTS Product_Types`);
  db.run(`DROP TABLE IF EXISTS Orders`);
  db.run(`DROP TABLE IF EXISTS Customers`);
  db.run(`DROP TABLE IF EXISTS Order_Products`);

  //CREATE TABLES AND COLUMNS
  db.run(`CREATE TABLE IF NOT EXISTS Products (

      ProductID INTEGER PRIMARY KEY, 
      title TEXT,
      price INT,
      description TEXT,
      type_id INT,
      customer_id INT)`);

  db.run(`CREATE TABLE IF NOT EXISTS Payment_Types (
        PaymentTypeID INTEGER PRIMARY KEY, 
        payment_type TEXT,
        account_number INT,
        customer_id INT)`);

  db.run(`CREATE TABLE IF NOT EXISTS Product_Types (
        ProductTypeID INTEGER PRIMARY KEY, 
        name TEXT)`);

  db.run(`CREATE TABLE IF NOT EXISTS Orders (
        OrderID INTEGER PRIMARY KEY, 
        order_date TEXT,
        payment_type_id INT,
        customer_id INT)`);

  db.run(`CREATE TABLE IF NOT EXISTS Customers (
        CustomerID INTEGER PRIMARY KEY, 
        first_name TEXT,
        last_name TEXT,
        creation_date TEXT,        
        last_login TEXT,
        email TEXT,
        address TEXT,
        phone_number INT)`);

  db.run(`CREATE TABLE IF NOT EXISTS Order_Products (
        OrderProductID INTEGER PRIMARY KEY, 
        OrderID INT,
        ProductID INT,
        FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),        
        FOREIGN KEY (ProductID) REFERENCES Products(ProductID))`);

  order_products.forEach(({ OrderID, ProductID }) => {
    db.run(`INSERT INTO Order_Products (OrderID, ProductID)
                VALUES ("${OrderID}", "${ProductID}")`);
  });

  //INSERT DATA INTO TABLES
  products.forEach(({ title, price, description, type_id, customer_id }) => {
    db.run(`INSERT INTO Products (title, price, description, type_id, customer_id) 
                VALUES ("${title}", "${price}", "${description}", "${type_id}", "${customer_id}")`);
  });

  product_types.forEach(({ name }) => {
    db.run(`INSERT INTO Product_Types (name) 
                VALUES ("${name}")`);
  });

  payment_types.forEach(({ payment_type, account_number, customer_id }) => {
    db.run(`INSERT INTO Payment_Types (payment_type, account_number, customer_id) 
              VALUES ("${payment_type}", "${account_number}", "${customer_id}")`);
  });

  orders.forEach(({ order_date, payment_type_id, customer_id }) => {
    db.run(`INSERT INTO Orders (order_date, payment_type_id, customer_id) 
                VALUES ("${order_date}", ${payment_type_id}, "${customer_id}")`);
  });

  customers.forEach(
    ({
      first_name,
      last_name,
      creation_date,
      last_login,
      email,
      address,
      phone_number
    }) => {
      db.run(`INSERT INTO Customers (first_name, last_name, creation_date, last_login, email, address, phone_number) 
                VALUES ("${first_name}", "${last_name}", "${creation_date}", "${last_login}", "${email}", "${address}", "${phone_number}")`);
    }
  );
});
