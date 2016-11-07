var db = require('../config/database'); 
var express = require('express');
var router = express.Router();
var multiparty = require('multiparty');
var util = require('util');
var fs = require('fs');
var path = require('path');
var percent;//全局变量获取进度
/* GET home page. */
router.get('/file/:id', function(req, res, next) {
	console.log(req.params.id)
 
       var pt=path.join(__dirname, '../public/file/'+req.params.id)
        	
        	console.log(pt)
       //  	// var pt=path.join(__dirname, '../public/file/ss.doc')
       //  	// 注意针对图片或者txt类型的文件需要重新设置内容的格式，也就是类似于iis的mini文件的配置；否则无法下载，每次都会以html的格式返回；
        	res.set({'Content-Type': "image/jpeg"|| "text/plain"});
        	  res.download(pt)
             
                
        
   
});
module.exports = router;
