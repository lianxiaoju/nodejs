var db = require('../config/database'); 
var express = require('express');
var router = express.Router();
var multiparty = require('multiparty');
var util = require('util');
var fs = require('fs');
var path = require('path');
var percent;//全局变量获取进度
/* GET home page. */
router.post('/', function(req, res, next) {
    //用multiparty进行文件的读取
    var form = new multiparty.Form();
    //存储文件的地址，注意这个地址是相对于bin下面的www文件的；
    //注意./是直接到bin下面的www文件；
    form.uploadDir = "./../public/file/";
    // 读取文件失败的后的方法；
    form.on('error', function(err) {
        console.log('Error parsing form: ' + err.stack);
    });
    
    form.on('progress', function(bytesReceived, bytesExpected) {
        
         global.pro = Math.round(bytesReceived/bytesExpected * 100);
        
        // console.log(req.cookies.progress)
    });
    //文件的操作
    form.parse(req, function (err, fields, files){
        var filesTmp = JSON.stringify(files,null,2);
        if (err){
            console.log('parse error: ' + err);
            res.send("写文件操作失败。");

        }else {
            // res.send("文件上传成功");
            // console.log('parse files: ' + filesTmp);
            //进行文件的重命名；如果不进行重命名，上传时的文件文件与储存的文件名将不一致； 
            var fileNameArr = Object.keys(files);
            var firstFilename = fileNameArr[0];
            var fileDataArr = files[firstFilename];
            // console.log( typeof fileDataArr);
            // console.log(fileDataArr);
            var fileData = fileDataArr[0];

            var uploadedPath = fileData.path;//赞存的路径，就是uploadDir存入的路径；

            var dstPath = './../public/file/' + fileData.originalFilename;//重命名后将要转移的路径+文件新名称（读取上传的原文件的名字）
            //文件的重命名以及转移操作；
            fs.rename(uploadedPath, dstPath, function(err) {
                if (err){
                    console.log("重命名文件错误："+ err);
                } else {
                    var dss="/file/"+fileData.originalFilename;
                    
                    db.pool.getConnection(function(err,connection){
                        var sql='insert into image_url(url) values("'+dss+'")'
                        connection.query(sql, function(err, rows, fields) {
                                console.log(err)
                        })
                    })
                    console.log("重命名文件成功。");
                    res.send("文件上传成功,并命名成功")
                }
            });
        }
    });
});
module.exports = router;
