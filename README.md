# Bangazon

## The Command Line Ordering System

This group project allows a user to interact with a basic product ordering database via a command line interface.

## Ordering System Interface

### Main Menu

```bash
*********************************************************
**  Welcome to Bangazon! Command Line Ordering System  **
*********************************************************
1. Create a customer account
2. Choose active customer
3. Create a payment option
4. Add product to sell
5. Add product to shopping cart
6. Complete an order
7. Remove customer product
8. Update product information
9. Show stale products
10. Show customer revenue report
11. Show overall product popularity
12. Leave Bangazon!
>
```
# Installing Technologies

## SQLite

### For OSX Users

```brew install sqlite```

### For Windows Users

Visit the [SQLite downloads](https://www.sqlite.org/download.html) and download the 64-bit DLL (x64) for SQLite version, unzip and install it.

## SQL Browser

The [DB browser for SQLite](http://sqlitebrowser.org/) will let you view, query and manage your databases during the course.

### Text Editor

Download and use any text editor of your choosing: SublimeText, VS Code, etc.

## For both OSX and Windows users

### NPM
1. Run ```npm init —y``` in the terminal to initial npm so further commands may be used
2. Run ```npm install —save -dev``` to install the node modules both globally and save it to the package.json in one step.

### Node.js
  1. Run ```npm install node.js``` in the terminal to be able to run node


### Faker.js
1. Run ```npm install faker``` to install fakerJS that will allow you access to its data


### DB Browser
1. Within SQLite, open the database “bangazoncorp.sqlite” from “db” folder within VS Code to access the DB Browser and its data within SQLite.

### Mocha
1. npm install mocha to install Mocha.

### Chai
1. npm install chai to install chai.

## Using the CLI



## 8. Update product information
1. To Update Product Information the user must first choose an Active User from Option #2. 
2. After Active User is selected. The User will then choose Option #8. This will bring up a list of that Active Users Products.
3. The User will then select the Product number they would like to update.
4. They are then given a list of Options to choose from:
    1. Title-- User can press "1" to Update the Product's Title.
    2. Price-- User can press "2" to Update the Product's Price.
    3. Description-- User can press "3" to Update the Product's Description.
    4. Quantity-- User can press "4" to Update the Product's Quantity 
    5. Save-- User can press "5" to Save the changes to the database.
    6. Return to Main Menu-- User can press "6" to return the User to the Main Menu at anytime.

