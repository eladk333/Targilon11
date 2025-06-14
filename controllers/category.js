const service = require('../services/category');

exports.createCategory = async (req, res) => {
  const result = await service.createCategory(req.body.name);
  res.json(result);
};

exports.getCategories = async (req, res) => {
  res.json(await service.getCategories());
};

exports.getCategory = async (req, res) => {
  const category = await service.getCategoryById(req.params.id);
  if (!category) return res.status(404).json({ error: 'Not found' });
  res.json(category);
};

exports.updateCategory = async (req, res) => {
  const updated = await service.updateCategory(req.params.id, req.body.name);
  if (!updated) return res.status(404).json({ error: 'Not found' });
  res.json(updated);
};

exports.deleteCategory = async (req, res) => {
  const deleted = await service.deleteCategory(req.params.id);
  if (!deleted) return res.status(404).json({ error: 'Not found' });
  res.json(deleted);
};
