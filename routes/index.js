const express = require('express');
const router = express.Router();

const IndexController = require('../controllers/index');

router.get('/', IndexController.index);

router.get('/product', IndexController.ListOfProducts);

router.post('/new-product', IndexController.newProduct);

module.exports = router;
