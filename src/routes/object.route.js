const express = require('express');
const objectController = require('../controllers/object.controller');
const router = express.Router();

router.get('/', objectController.findAll);
router.get('/list', objectController.findAllInOrder);
router.get('/:id', objectController.findOne);
router.post('/', objectController.create);

module.exports = router;