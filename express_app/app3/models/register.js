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
                    console.log(req.body.name)
                     for (var i = 0; i < rows.length; i++) {
                         switch (rows[i][req.body.name]){
                             case req.body.val:{
                                 status=false;
                             } break;
                         }
                    };
                }else{
                    status=true;
                }
                // res.header("Access-Control-Allow-Origin", "*");
            console.log(status)
            if(status!=false){
                status=true;
            }
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
var tests=function(req,res,next){
    db.pool.getConnection(function(err,connection){
       res.send(true)
    })
}
router.post('/', function(req, res, next) {
        var state=false;
        var parme;
        for(var i in req.query){
            state=true;
        }
        if (state) {
            parme=req.query
        }else{
             parme=req.body
        };
        switch(parme.method){
            case 'check':{
                    check(req,res,next)
            } break;
            case 'send':{
                    insert(req,res,next)
            } break;
            case 'tests':{
                console.log('sdfsdfsdf')
                res.send(true)
                    // tests(req,res,next)
            } break;
        }
});

module.exports = router;