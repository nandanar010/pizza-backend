const mongoose = require('mongoose');

const veggieSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
    image: String,
});

module.exports = mongoose.model('Veggie', veggieSchema);