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
1. Run ```npm install mocha``` on the command line to install Mocha.

### Chai
1. Run ```npm install chai``` on the command line to install Chai.


## Using the CLI

## 1. Create Customer Account
1. To create customer Information the user must first choose Option #1. 
2. After option 1 is selected. The User will then be prompted to fill in customer information.
3. The User will then enter:
    1. First and Last name.
    2. Street Address.
    3. City.
    4. State. 
    5. Postal Code.
    6. Phone Number.
 4. Then the Customer will be created.
 
## 2. Choose Active Customer
1. To choose an Active Customer the user must first choose Option #2 from the menu. 
2. After option 2 is selected. The User will then choose an Active Customer.  

## 3. Add Payment Option
1. To add a payment option to the customer account, first you must select option 1 or 2 two create a customer or select an active customer.
2. Once customer option is selected, enter in option 3 to be taken to the payment options.
3. You'll first be prompted to enter in which type of payment card you wish to have on file (Visa, Amex, Mastercard, etc.). Type in one option and hit enter.
4. Then, you will enter in the card number associated with the type of credit/debit card you want to store.
5. Hitting enter saves the payment information to the user account and can be used for future order completions. 

## 4. Add Products To Sell
1. To add products to sell the user must first choose Option #2 to and choose a active customer. 
2. After option 2 is selected. The User will then be prompted to fill in the Product Information.
3. The User will then enter:
    1. Product Name.
    2. Product Price.
    3. Product Description.
    4. Product Type. 
 4. Then the Product to sell will be created.

## 7. Remove Customer Product
1. To remove a product from the the database, the user must first select option #7. 
2. After option #7 is selected, the User will then be given a list of products related to the active customer that are not currently active on orders. 
3. Depending on which ever product the user wants to delete, all that is required is to type in the number correlating with the product and pressing enter.
4. After pressing enter, the product will be erased from the database completely.

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
    
## 9. View Stale Products
1. To View Stale Products Information the user must first choose an Active User from Option #2. 
2. After Active User is selected. The User will then choose Option #9. This will bring up a list all the Stale Products.

## 10. View Revenue Report
1. To View Customer Revenue Information the user must first choose an Active User from Option #2. 
2. After Active User is selected. The User will then choose Option #10. This will bring up a list of costumer Products and the Revenue Report.    
