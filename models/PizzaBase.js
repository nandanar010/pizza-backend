const mongoose = require('mongoose');

const pizzaBaseSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
    image: String,
});

module.exports = mongoose.model('PizzaBase', pizzaBaseSchema);