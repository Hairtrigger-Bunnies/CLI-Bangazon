const { assert: { equal, isFunction, isObject } } = require("chai");
const { createNewCustomer } = require("../app/models/Customer");
const { promptNewCustomer } = require("../app/controllers/customerCtrl");
// customer model test

// createNewFunction is a function (DR)
describe("Customer Model", () => {
  describe("createNewCustomer creates customer", () => {
    it("should exist", () => {
      isFunction(createNewCustomer);
    });
    it("should return a promise", () => {
      isFunction(getCustomers);
    });
    // insures the promise is resolved and is an array (DR)
    it("promise is resolved", function() {
      getCustomers().then(Data => {
        isArray(Data);
      });
    });
  });
});

// customer controller test

// promptNewCustomer is a function (DR)
describe("promptNewCustomer", () => {
  it("should be a function", () => {
    isFunction(promptNewCustomer);
  });
});
