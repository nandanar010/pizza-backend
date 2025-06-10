const express = require('express');
const router = express.Router();
const Veggie = require('../models/Veggie');

router.get('/', async (req, res) => {
  try {
    const data = await Veggie.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Veggies fetch failed' });
  }
});

module.exports = router;