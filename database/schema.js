const mongoose = require('mongoose');

mongoose.Promise = global.Promise;


const listingSchema = new mongoose.Schema({
  id: Number,
  reviews: [{
    name: String,
    date: String,
    image: String,
    reviewbody: String,
    accuracy: Number,
    communication: Number,
    cleanliness: Number,
    location: Number,
    checkin: Number,
    value: Number,
  }],
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports.Listing = Listing;
module.exports.listingSchema = listingSchema;
