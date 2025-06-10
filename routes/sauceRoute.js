const express = require('express');
const router = express.Router();
const Sauce = require('../models/Sauce');

router.get('/', async (req, res) => {
  try {
    const data = await Sauce.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Sauce fetch failed' });
  }
});

module.exports = router;