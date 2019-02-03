var express = require('express');
var router = express.Router();
var controllers = require('../controllers/user.controller.js');
var validate = require('../validate/user.validate.js');

router.get('/', controllers.index);

router.get('/search', controllers.search);

router.get('/create', controllers.getCreate);

router.post('/create', validate.postCreate, controllers.postCreate);

router.get('/:idx', controllers.getID);

module.exports = router;