const express = require('express');
const router = express.Router();
const Meat = require('../models/meat');

// GET all meats
router.get('/', async (req, res) => {
  const meats = await Meat.find();
  res.json(meats);
});

// POST new meat
router.post('/', async (req, res) => {
  try {
    const meat = new Meat(req.body);
    await meat.save();
    res.status(201).json(meat);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add meat' });
  }
});

module.exports = router;