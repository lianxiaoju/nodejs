var db = require('../config/database'); 
var express = require('express');
var router = express.Router();

/* GET home page. */

var check=function(req,res,next){
    db.pool.getConnection(function(err, connection) {
        connection.query('SELECT '+req.body.name+' FROM user_login', function(err, rows, fields) {
                var status;
                if(rows.length!=0){
                    console.log(rows)
                    console.log(req.body.val)
                     for (var i = 0; i < rows.length; i++) {
                        if (rows[i][req.body.name]==req.body.val) {
                            status=false;
                            
                        }else{
                            status=true;
                        };
                    };
                }else{
                    status=true;
                }
                res.header("Access-Control-Allow-Origin", "*");
                res.send(status)
        })
    })
}
var insert=function(req,res,next){
    db.pool.getConnection(function(err,connection){
        var sql='insert into user_login(name,password,email,qq,address) values("'+req.body.name+'","'+req.body.password+'","'+req.body.email+'",'+req.body.qq+',"'+req.body.address+'")'
        connection.query(sql, function(err, rows, fields) {
                var status;
               if (rows!="undifined"&&rows!=null&&rows!="") {
                if (rows.affectedRows>=1) {
                    status=true;
                }else{
                    status=false;
                };
               }else{
                    status=false;
               };
                res.send(status)
        })
    })
}
var test=function(req,res,next){
    db.pool.getConnection(function(err,connection){
       res.send(true)
    })
}
router.post('/', function(req, res, next) {
    
        switch(req.body.method){
            case 'check':{
                    check(req,res,next)
            } break;
            case 'send':{
                    insert(req,res,next)
            } break;
            case 'test':{
                console,log('sdfsdfsdf')
                    test(req,res,next)
            } break;
        }
});

module.exports = router;