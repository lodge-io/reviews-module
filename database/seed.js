const mongoose = require('mongoose');
const db = require('./index.js');
const fakeData = require('../mockdata/mockdata.js');
const schema = require('../database/schema.js');

mongoose.Promise = global.Promise;

const mockData = fakeData.createUserReviews();

const saveListings = () => {
  schema.Listing.create(mockData, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log('created!');
    }
  });
};

saveListings();


const findListings = (cb) => {
  schema.Listing.find((err, res) => {
    if (err) {
      cb(err);
    } else {
      console.log(res)
      cb(null, res);
    }
  });
};

const findOneListing = (id, cb) => {
  schema.Listing.findOne({id: id}, (err, res) => {
    if (err) {
      cb(err);
    } else {
      console.log(res)
      cb(null, res);
    }
  });
}

module.exports.saveListings = saveListings;
module.exports.findListings = findListings;
module.exports.findOneListing = findOneListing;