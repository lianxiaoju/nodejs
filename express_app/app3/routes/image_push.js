var express = require('express');
var router = express.Router();
var db = require('../config/database');
/* GET users listing. */
router.get('/', function(req, res, next) {
	
	           res.render('image_push', { title: "haha"});
	   
});

module.exports = router;
