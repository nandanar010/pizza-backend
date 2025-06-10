const mongoose = require('mongoose');

const meatSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String
});

module.exports = mongoose.model('Meat', meatSchema);