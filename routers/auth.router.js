var express = require('express');
var router = express.Router();
var controllers = require('../controllers/auth.controller.js');

router.get('/login', controllers.getLogin);
router.post('/login', controllers.postLogin);

module.exports = router;