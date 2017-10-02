const { assert: { equal, isFunction, isObject } } = require("chai");
const { createNewCustomer } = require("../app/models/Customer");
const { promptNewCustomer } = require("../app/controllers/customerCtrl");
const { getCustRevenue, getCustomers } = require("../app/models/Customer");
// customer model test

// createNewCustomer is a function (DR)
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
      // getCustRevenue is a function (DR)
      it("should be a function", () => {
        isFunction(getCustRevenue);
      });
      // insures the promise is resolved and is an array (DR)
      it("promise resolved", function() {
        getCustRevenue().then(Data => {
          isArray(Data);
        });
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
