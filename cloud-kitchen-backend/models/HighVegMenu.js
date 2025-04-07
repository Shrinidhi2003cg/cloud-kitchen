const mongoose = require('mongoose');

const highVegMenuSchema = new mongoose.Schema({
  name: String,
  price: Number,
  mealType: String, // breakfast, lunch, dinner
  serving: Number,
  chef: String,
});

module.exports = mongoose.model('HighVegMenu', highVegMenuSchema, 'hifi_veg_menus');
