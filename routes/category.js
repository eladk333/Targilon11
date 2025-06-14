const express = require('express');
const router = express.Router();
const controller = require('../controllers/category');

router.route('/')
  .get(controller.getCategories)
  .post(controller.createCategory);

router.route('/:id')
  .get(controller.getCategory)
  .patch(controller.updateCategory)
  .delete(controller.deleteCategory);

module.exports = router;
