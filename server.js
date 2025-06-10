// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// 🔗 Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection failed:', err));

// 🔗 Routes
const authRoutes = require('./routes/auth');
const pizzabaseRoutes = require('./routes/pizzaBaseRoute');
const sauceRoutes = require('./routes/sauceRoute');
const cheeseRoutes = require('./routes/cheeseRoute');
const veggieRoutes = require('./routes/veggiesRoute');
const meatRoutes = require('./routes/meatRoute');
const orderRoutes = require('./routes/orderRoute'); // ✅ Add this line

// 🔗 API Route Mounting
app.use('/api/auth', authRoutes);
app.use('/api/pizza/bases', pizzabaseRoutes);
app.use('/api/sauces', sauceRoutes);
app.use('/api/cheeses', cheeseRoutes);
app.use('/api/veggies', veggieRoutes);
app.use('/api/meats', meatRoutes);
app.use('/api/orders', orderRoutes); // ✅ Mount order route

// ✅ Test Endpoint
app.get('/', (req, res) => res.send('🍕 Pizza Backend is Running'));

// ✅ Start Server
app.listen(5000, () => console.log('🚀 Server is running at http://localhost:5000'));