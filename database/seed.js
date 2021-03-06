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
      db.close();
    }
  });
};

saveListings();
