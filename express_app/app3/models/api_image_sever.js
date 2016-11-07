var db = require('../config/database'); 
var express = require('express');
var router = express.Router();
var multiparty = require('multiparty');
var util = require('util');
var fs = require('fs');
var path = require('path');
var percent;//全局变量获取进度
/* GET home page. */
router.get('/', function(req, res, next) {
   db.pool.getConnection(function(err,connection){
         var sql='select url from image_url';
        connection.query(sql, function(err, rows, fields) {
                console.log(rows)
                res.send(rows)
        })
   })
});
module.exports = router;
