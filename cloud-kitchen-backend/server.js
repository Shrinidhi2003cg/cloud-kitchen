console.log("👋 Server file started");

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// ✅ Route for high-end veg menu
const highVegMenuRoutes = require('./routes/highVegMenuRoutes');
app.use('/highveg', highVegMenuRoutes);

// Default route (test route)
app.get('/', (req, res) => {
  res.send('🍽️ Cloud Kitchen Backend is Running!');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ MongoDB connection error:', error);
  });
