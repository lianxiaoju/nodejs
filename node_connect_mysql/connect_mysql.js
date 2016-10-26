var express = require('express');
var mysql = require('mysql');
var app = express();
var TEST_DATABASE = 'zwj';
var TEST_TABLE = 'user';

//创建连接  
var client = mysql.createConnection({
    user: 'root',
    password: 'QWEasdzxc1231',
    database:'zwj'
});

client.connect(function(err){
    console.log(err)
});
//client.query("use " + TEST_DATABASE);
//
//client.query(
//    'SELECT * FROM '+TEST_TABLE,
//    function selectCb(err, results, fields) {
//        if (err) {
//            throw err;
//        }
//
//        if(results)
//        {
//            for(var i = 0; i < results.length; i++)
//            {
//                console.log("%d\t%s\t%s", results[i].id, results[i].name, results[i].age);
//            }
//        }
//        client.end();
//    }
//);
app.listen(3000)