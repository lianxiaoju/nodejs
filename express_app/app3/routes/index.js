var express = require('express');
var router = express.Router();
var db = require('../config/database');

/* GET home page. */
router.get('/', function(req, res, next) {
	 db.pool.getConnection(function(err, connection) {
	 	connection.query('SELECT * FROM user', function(err, rows, fields) {
           res.render('index', { title: "陈元广",data: rows });
           connection.end();
        });
	 })
	 
        
  // var rows=[{name:'hsd',age:'23',city:'dfs'}]
  // res.render('index', { title: "陈元广",data: rows });
});

module.exports = router;
