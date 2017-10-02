
// using Faker to generate a pile of product types and products
'use strict';

const faker = require('faker');

module.exports.generateProducts = (typesLen, customersLen) => {
  let products = [];

  for (let i = 0; i < 15; i++) {
    let title = faker.commerce.productName();
    let price = faker.commerce.price();
    let description = faker.lorem.sentence();
    let type_id = Math.floor(Math.random() * typesLen) + 1;
    let customer_id = Math.floor(Math.random() * customersLen) + 1;
    let quantity = Math.floor((Math.random() * 100) + 1);

    products.push({
      title,
      price,
      description,
      type_id,
      customer_id,
      quantity
    });
  }
  return products;
};