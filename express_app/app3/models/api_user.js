var db = require('../config/database'); 
var express = require('express');
var router = express.Router();

/* GET home page. */
var querys=function(req, res, next,connection){
    var sql="select * from user_login where name='"+req.query.name+"'";
    var sql_like="select * from user_login where name like '%"+req.query.name+"%'";
    connection.query(sql, function(err, rows, fields) {
                if (rows[0].password==req.query.password) {
                     console.log(rows);
                    res.send(true)
                }else{
                    res.send(false)
                };
               
            });
}
router.get('/', function(req, res, next) {
    if (req.query && req.query.callback) {
        //console.log(params.query.callback);
        res.jsonp({status: 200, message: "ÕâÊÇÒ»¸öJSONP½Ó¿Ú", data:[]});
    } else {
         db.pool.getConnection(function(err, connection) {
            querys(req, res, next,connection)
         })
   
    }
});

module.exports = router;
