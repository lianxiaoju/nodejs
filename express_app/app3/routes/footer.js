ar express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    
     res.render('footer', { title: "陈元广"});
    
  
});

module.exports = router;