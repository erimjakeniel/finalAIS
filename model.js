const mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var Shop = new Schema({
  first: {
    type: String,
    required: true
  },
  middle: {
    type: String,
    required: true
  },
  last: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  month: {
    type: String,
    required: true
  }, 
  day: {
    type: Number,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  }, 
  street: {
    type: String,
    required: true
  }, 
  city: {
    type: String,
    required: true
  }, 
  state: {
    type: String,
    required: true
  }, 
  country: {
    type: String,
    required: true
  }, 
  email: {
    type: String,
    required: true
  }, 
  phone: {
    type: Number,
    required: true
  }, 
  grade: {
    type: Number,
    required: true
  }, 
});

// Compile model from schema
module.exports = mongoose.model('Item', Shop);