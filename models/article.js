const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  published: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Article', ArticleSchema);
