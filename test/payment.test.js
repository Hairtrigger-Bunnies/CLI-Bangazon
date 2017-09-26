const { assert: {equal, isFunction, is } } = require('chai');
const { addNewPaymentType, getAllPaymentTypes } = require('../app/models/PaymentType');
const { promptNewPayment } = require('../app/controllers/paymentCtrl');

const path = require('path');
const sqlite3 = require("sqlite3").verbose();
const dbPath = path.resolve(__dirname, '..', '..', 'db', 'bangazon.sqlite');
const db = new sqlite3.Database(dbPath);

//Payment Model tests
describe('Payment type Model', () => {
    it('should be a function', () => {
      isFunction(addNewPaymentType);
    });
    it('should return promise', () => {
      isFunction(getAllPaymentTypes);
    });
    it('resolves as promised', function() {

      const myPromise = new Promise( (resolve, reject) => {
          db.all(`SELECT * FROM Payment_Types`, (err, Data) => {
            if (err) return reject(err);
            resolve(Data);
          });
          myPromise.then( (result) => {
            expect(result).to.equal(Data);
            done();
          });
        });
      });

    //   return Promise.resolve('Data')
    //       .then(function(getAllPaymentTypes) { expect(getAllPaymentTypes).to.equal('Data'); })
    //       .catch(function(getAllPaymentTypes) { throw new Error('was not supposed to fail'); });
    // });
});

//Payment Ctrl tests
describe('Payment type Ctrl', () => {
  it('should be a function', () => {
    isFunction(promptNewPayment);
  });
});