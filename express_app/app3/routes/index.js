var express = require('express');
var router = express.Router();
var db = require('../config/database');

/* GET home page. */

router.get('/', function(req, res, next) {
	var cookiess
	console.log(req.cookies)
	if (req.cookies.isVisit) {

		res.cookie("isVisit",parseInt(req.cookies.isVisit)+1);
        cookiess='第 ' + req.cookies.isVisit + '次来此页面';
	} else{
		// res.cookie("isVisit",1,{maxAge:500000});//这里设置为5s后过期
		res.cookie("isVisit",1);//这里如果进行任何的设置，本cookie将默认为session，浏览器关闭后将消失；
        cookiess="欢迎第一次来这里";
        // console.log("Cookies: ", req.cookies); //打印cookie
	};
	 db.pool.getConnection(function(err, connection) {
	 	connection.query('SELECT * FROM user', function(err, rows, fields) {
	 		
           res.render('index', { title: "陈元广",data: rows ,cookiess:cookiess});
           connection.end();
        });
	 })
	 
        
  // var rows=[{name:'hsd',age:'23',city:'dfs'}]
  // res.render('index', { title: "陈元广",data: rows });
});

module.exports = router;
