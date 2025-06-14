const express = require('express');
const router = express.Router();
const controller = require('../controllers/article');

router.route('/')
  .get(controller.getArticles)
  .post(controller.createArticle);

router.route('/:id')
  .get(controller.getArticle)
  .patch(controller.updateArticle)
  .delete(controller.deleteArticle);

module.exports = router;
