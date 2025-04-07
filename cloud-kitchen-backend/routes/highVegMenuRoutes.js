const express = require('express');
const router = express.Router();
const HighVegMenu = require('../models/HighVegMenu');

// POST - Add a new high-end veg menu item
router.post('/add', async (req, res) => {
  try {
    if (!req.body.name || !req.body.price) {
      return res.status(400).json({ error: '❗ Name and price are required' });
    }

    const newDish = new HighVegMenu(req.body);
    await newDish.save();
    res.status(201).json({ message: '🌿 High-end veg dish added successfully!' });
  } catch (error) {
    console.error('❌ Error adding dish:', error.message);
    res.status(500).json({ error: '❌ Failed to add dish', details: error.message });
  }
});

// GET - Fetch all high-end veg menu items
router.get('/', async (req, res) => {
  console.log('📥 GET request to /highveg/');
  try {
    const dishes = await HighVegMenu.find();
    res.status(200).json(dishes);
  } catch (error) {
    console.error('❌ Error fetching dishes:', error.message);
    res.status(500).json({ error: '❌ Failed to fetch dishes', details: error.message });
  }
});

// ✅ DELETE - Delete a dish by ID
router.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await HighVegMenu.findByIdAndDelete(id);
    res.status(200).json({ message: '🗑️ Dish deleted successfully!' });
  } catch (error) {
    console.error('❌ Error deleting dish:', error.message);
    res.status(500).json({ error: '❌ Failed to delete dish', details: error.message });
  }
});

module.exports = router;
