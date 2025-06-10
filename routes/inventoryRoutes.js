const express = require('express');
const router = express.Router();

const PizzaBase = require('../models/PizzaBase');
const Sauce = require('../models/Sauce');
const Cheese = require('../models/Cheese');
const Veggies = require('../models/Veggies');
const Meat = require('../models/Meat');

// Add new item to inventory
router.post('/add', async (req, res) => {
  try {
    const { category, name, quantity } = req.body;
    let Model;

    if (category === 'base') Model = PizzaBase;
    else if (category === 'sauce') Model = Sauce;
    else if (category === 'cheese') Model = Cheese;
    else if (category === 'veggies') Model = Veggies;
    else if (category === 'meat') Model = Meat;
    else return res.status(400).json({ error: 'Invalid category' });

    const newItem = new Model({ name, quantity });
    await newItem.save();
    res.status(201).json({ message: `${category} added.` });
  } catch (err) {
    res.status(500).json({ error: 'Error adding item', details: err.message });
  }
});

// View all inventory
router.get('/all', async (req, res) => {
  try {
    const bases = await PizzaBase.find();
    const sauces = await Sauce.find();
    const cheeses = await Cheese.find();
    const veggies = await Veggies.find();
    const meats = await Meat.find();

    res.json({ bases, sauces, cheeses, veggies, meats });
  } catch (err) {
    res.status(500).json({ error: 'Error fetching inventory' });
  }
});

module.exports = router;
