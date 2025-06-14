const Article = require('../models/article');

const createArticle = async (title, published) => {
  const article = new Article({ title });
  if (published) article.published = published;
  return await article.save();
};

const getArticleById = id => Article.findById(id);
const getArticles = () => Article.find({});
const updateArticle = async (id, title) => {
  const article = await getArticleById(id);
  if (!article) return null;
  article.title = title;
  await article.save();
  return article;
};
const deleteArticle = async id => {
  const article = await getArticleById(id);
  if (!article) return null;
  await article.remove();
  return article;
};

module.exports = { createArticle, getArticleById, getArticles, updateArticle, deleteArticle };
