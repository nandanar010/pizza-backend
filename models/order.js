const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  base: Object,
  sauce: Object,
  cheese: Object,
  veggies: [Object],
  meat: [Object],
  totalPrice: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Order', orderSchema);