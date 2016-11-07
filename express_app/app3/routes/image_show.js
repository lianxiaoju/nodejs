var express = require('express');
var router = express.Router();
var db = require('../config/database');
/* GET users listing. */
router.get('/', function(req, res, next) {
	
	           res.render('image_show', { title: "haha"});
	   
});

module.exports = router;
