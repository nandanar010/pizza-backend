const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// ✅ Save a new order (POST)
router.post('/', async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json({ message: '✅ Order saved successfully!' });
  } catch (err) {
    res.status(500).json({ message: '❌ Failed to save order', error: err });
  }
});

// ✅ Get all orders (GET)
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().sort({ date: -1 });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: '❌ Failed to retrieve orders', error: err });
  }
});

module.exports = router;