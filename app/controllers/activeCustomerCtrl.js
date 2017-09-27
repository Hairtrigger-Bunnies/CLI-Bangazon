"use strict";

const {
  setActiveCustomer,
  getActiveCustomer
} = require("../app/models/activeCustomer");

module.exports.activeCustomer = (req, res, next) => {
  setActiveCustomers(req.id);
  getActiveCustomer()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => next(err));
};
