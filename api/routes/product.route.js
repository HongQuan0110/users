var express = require('express');
var router = express.Router();
var controllers = require('../controllers/product.controller');

router.get('/', controllers.getProduct);
router.post('/', controllers.create);

module.exports = router;