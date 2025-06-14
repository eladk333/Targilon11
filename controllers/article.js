const service = require('../services/article');

exports.createArticle = async (req, res) => {
  const result = await service.createArticle(req.body.title);
  res.json(result);
};

exports.getArticles = async (req, res) => {
  res.json(await service.getArticles());
};

exports.getArticle = async (req, res) => {
  const article = await service.getArticleById(req.params.id);
  if (!article) return res.status(404).json({ error: 'Not found' });
  res.json(article);
};

exports.updateArticle = async (req, res) => {
  const updated = await service.updateArticle(req.params.id, req.body.title);
  if (!updated) return res.status(404).json({ error: 'Not found' });
  res.json(updated);
};

exports.deleteArticle = async (req, res) => {
  const deleted = await service.deleteArticle(req.params.id);
  if (!deleted) return res.status(404).json({ error: 'Not found' });
  res.json(deleted);
};
