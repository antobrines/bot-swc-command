const express = require('express');
const categoryController = require('../controllers/category.controller');
const router = express.Router();
const { getLanguage } = require('../middlewares/language.middleware');

router.get('/', getLanguage, categoryController.getAll);
router.get('/:id', getLanguage, categoryController.getOne);
router.post('/', getLanguage, categoryController.create);

module.exports = router;