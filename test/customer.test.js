const { assert: { equal, isFunction, isObject } } = require("chai");
const { createNewCustomer } = require("../app/models/Customer");
const { promptNewCustomer } = require("../app/controllers/customerCtrl");
// customer model test

// createNewFunction is a function and fetchCustomers returns an objects
describe("main", () => {
  describe("createNewCustomer creates customer", () => {
    it("should exist", () => {
      isFunction(createNewCustomer);
    });
  });
});

// customer controller test

describe("promptNewCustomer", () => {
  it("should be a function", () => {
    isFunction(promptNewCustomer);
  });
});

// Pro Tip: Remember, we are testing features, not functions. Require whichever modules you need to test a feature
