const mongoose = require('mongoose');
const db = require('./index.js');
const fakeData = require('../mockdata/mockdata.js');
const schema = require('../database/schema.js');

mongoose.Promise = global.Promise;

const fake = fakeData.createUserReview();

const saveListings = () => {
  schema.Listing.create(fake, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
};

saveListings();


const findListings = (cb) => {
  schema.Listing.find((err, results) => {
    if (err) {
      cb(err);
    } else {
      cb(null, results);
    }
  });
};

module.exports.saveListings = saveListings;
module.exports.findListings = findListings;
