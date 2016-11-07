var express = require('express');
var router = express.Router();
var db = require('../config/database');

/* GET home page. */

router.get('/', function(req, res, next) {
	var cookiess,allnum;
	if (req.cookies.isVisit) {

		res.cookie("isVisit",parseInt(req.cookies.isVisit)+1);
        cookiess='第 ' + req.cookies.isVisit + '次来此页面';
	} else{
		// res.cookie("isVisit",1,{maxAge:500000});//这里设置为5s后过期
		res.cookie("isVisit",1);//这里如果不进行任何的设置，本cookie将默认为session，浏览器关闭后将消失；
        cookiess="欢迎第一次来这里";
        // console.log("Cookies: ", req.cookies); //打印cookie
	};
	 db.pool.getConnection(function(err, connection) {
		 //页面的来访人数
		 connection.query("select AllVisit from visit",function(err,rows,fields){
			 var visit_new=rows[0].AllVisit+1
			 connection.query("UPDATE visit SET AllVisit="+(rows[0].AllVisit+1)+" WHERE id=1;",function(err,rows,fields){
				 console.log("更新访问次数成功",rows)
			 })
			 connection.query('SELECT * FROM user', function(err, rows, fields) {

				 res.render('index', { title: "陈元广",data: rows,visit:"此页面总访问人数为"+visit_new,cookiess:cookiess});
				 connection.end();
			 });
		 })

	 })
	 
        
  // var rows=[{name:'hsd',age:'23',city:'dfs'}]
  // res.render('index', { title: "陈元广",data: rows });
});

module.exports = router;
