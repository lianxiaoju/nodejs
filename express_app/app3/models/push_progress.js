var db = require('../config/database'); 
var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    console.log(global.pro)
    //注意res.send发送的为字符串类型的数据；
    var sp=global.pro.toString()
    res.send(sp)
});

module.exports = router;
