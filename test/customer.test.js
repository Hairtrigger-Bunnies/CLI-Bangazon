const { assert: { equal, isFunction, isObject } } = require("chai");
const { createCustomer } = require("../models/Customer");
// Placed here to confirm test file runs properly
describe("just a test", () => {
  it("should be equal", () => {
    equal(3, 1 + 2);
  });
  isFunction(createCustomer);
});

it("should return an object", () => {
  createCustomer("555-555-555")
    .then(customer => {
      isObject(customer, "You got an object");
    })
    .catch(err => {
      console.log("err, unable to get customer", err);
    });
});

// Pro Tip: Remember, we are testing features, not functions. Require whichever modules you need to test a feature
