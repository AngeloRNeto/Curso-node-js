'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');

router.get('/:title', controller.getByTitle);
router.get('/admin/:id', controller.getById);
router.get('/tags/:tag', controller.getByTags);
router.get('/', controller.get);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete);

module.exports = router;