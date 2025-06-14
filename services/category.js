const Category = require('../models/category');

const createCategory = async name => {
  const category = new Category({ name });
  return await category.save();
};

const getCategoryById = id => Category.findById(id);
const getCategories = () => Category.find({});
const updateCategory = async (id, name) => {
  const category = await getCategoryById(id);
  if (!category) return null;
  category.name = name;
  await category.save();
  return category;
};
const deleteCategory = async id => {
  const category = await getCategoryById(id);
  if (!category) return null;
  await category.remove();
  return category;
};

module.exports = { createCategory, getCategoryById, getCategories, updateCategory, deleteCategory };
