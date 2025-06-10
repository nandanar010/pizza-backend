const express = require('express');
const router = express.Router();
const PizzaBase = require('../models/PizzaBase');

router.get('/', async (req, res) => {
  try {
    const data = await PizzaBase.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Pizza base fetch failed' });
  }
});

module.exports = router;