var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'test',
    port:3306
});

connection.connect(function(err){
    console.log(err)
});


var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    if (req.query && req.query.callback) {
        //console.log(params.query.callback);
        res.jsonp({status: 200, message: "ÕâÊÇÒ»¸öJSONP½Ó¿Ú", data:[]});
    } else {
        connection.query('SELECT * FROM user_ajax', function(err, rows, fields) {
            console.log(rows);
                
            // res.json({status: 200, message: "这是一个接口", data:rows});
            res.send(rows)

        });
        // connection.end();
    }
});

module.exports = router;