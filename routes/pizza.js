const express = require('express');
const router = express.Router();

const PizzaBase = require('../models/PizzaBase');
const Sauce = require('../models/Sauce');
const Cheese = require('../models/cheese');
const Veggie = require('../models/Veggie');
const Meat = require('../models/Meat');

// ✅ Route to get all pizza bases
router.get('/bases', async (req, res) => {
  try {
    const bases = await PizzaBase.find();
    res.json(bases);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching pizza bases' });
  }
});

// ✅ Route to add sample pizza bases (use only once)
router.get('/add-sample-bases', async (req, res) => {
  try {
    const sampleBases = [
      { name: 'Thin Crust', quantity: 10 },
      { name: 'Thick Crust', quantity: 10 },
      { name: 'Cheese Burst', quantity: 10 },
      { name: 'Gluten Free', quantity: 10 },
      { name: 'Whole Wheat', quantity: 10 },
    ];
    await PizzaBase.insertMany(sampleBases);
    res.status(201).json({ message: 'Sample pizza bases added successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add sample bases' });
  }
});

// ✅ Route to get all sauces
router.get('/sauces', async (req, res) => {
  try {
    const sauces = await Sauce.find();
    res.json(sauces);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching sauces' });
  }
});

// ✅ Route to get all cheeses
router.get('/cheeses', async (req, res) => {
  try {
    const cheeses = await Cheese.find();
    res.json(cheeses);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching cheeses' });
  }
});

// ✅ Route to get all veggies
router.get('/veggies', async (req, res) => {
  try {
    const veggies = await Veggie.find();
    res.json(veggies);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching veggies' });
  }
});

// ✅ Route to get all meats
router.get('/meats', async (req, res) => {
  try {
    const meats = await Meat.find();
    res.json(meats);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching meats' });
  }
});

module.exports = router;