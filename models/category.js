const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Category', CategorySchema);
