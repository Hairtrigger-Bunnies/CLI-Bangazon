"use strict";

const prompt = require("prompt");

module.exports.promptNewCustomer = () => {
  return new Promise((resolve, reject) => {
    prompt.get(
      [
        {
          name: "name",
          message: "Please Enter Customer Name (First, Last)",
          description: "Enter customer name (First Last)",
          type: "string",
          required: true
        },
        {
          name: "street",
          Message: "Please Enter Customer Street Address",
          description: "Enter street address",
          type: "string",
          required: true
        },
        {
          name: "city",
          message: "Please Enter Customer City",
          description: "Enter city",
          type: "string",
          required: true
        },
        {
          name: "state",
          message: "Please Enter Customer State",
          description: "Enter state (NC)",
          type: "string",
          required: true
        },
        {
          name: "zip",
          message: "Please Enter Customer Postal Code",
          description: "Enter postal code",
          type: "string",
          required: true
        },
        {
          name: "phone",
          message: "Please Enter Customer Phone Number",
          description: "Enter phone number (xxx-yyy-zzzz)",
          type: "string",
          required: true
        }
      ],
      function(err, results) {
        if (err) return reject(err);
        resolve(results);
      }
    );
  });
};
