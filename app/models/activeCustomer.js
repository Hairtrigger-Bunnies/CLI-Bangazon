'use strict';

let activeCustomer = {
  id: null
}

//This function will be called by the controller with a number as it's argument
module.exports.setActiveCustomer = (id) => {
  activeCustomer.id = id;
}

module.exports.getActiveCustomer = (activeCustomer) => {
  return new Promise( (resolve, reject) => {
    db.all(`SELECT * FROM customers WHERE CustomerID = activeCustomer.id`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};