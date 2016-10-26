var express = require('express');
var router = express.Router();
var mysql = require('easymysql');
var connection = mysql.create({
    'maxconnections' : 10
});
connection.addserver({
  'host' : '127.0.0.1',
  'user' : 'root',
  'password' : '123456',
  'database' : 'test',
});

connection.on('busy', function (queuesize, maxconnections, which) {
    // XXX: write log and monitor it
    // console.log(which)
});
connection.query('SHOW DATABASES', function (error, res) {
    console.log(res);
});

/* GET users listing. */
router.get('/', function(req, res, next) {
	// res.render('include_test', { title: "haha" });
	  connection.query('SELECT * FROM user', function(err, rows, fields) {
	           res.render('include_test', { title: "haha",data: rows });
	    });
	  //   connection.end();
});

module.exports = router;
