const express = require('express');
const router = express.Router();
const Cheese = require('../models/cheese');

// GET all cheeses
router.get('/', async (req, res) => {
  const cheeses = await Cheese.find();
  res.json(cheeses);
});

// POST new cheese
router.post('/', async (req, res) => {
  try {
    const cheese = new Cheese(req.body);
    await cheese.save();
    res.status(201).json(cheese);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add cheese' });
  }
});

module.exports = router;