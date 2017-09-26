'use strict';

const { addSingleProduct } = require('../models/Product');

module.exports.setProduct = (req, res, next) => {
    addSingleProduct(req.body)
    .then( (data) => {
      res.status(200).json(data);
    })
    .catch( (err) => next(err));
};