var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');//针对cookie的中间件；
// var session = require('express-session');//针对session的中间件
var bodyParser = require('body-parser');

// model——模版
// 可以将路由的控制写在这里，省掉单独的配置routes文件；
// var router = express.Router();
// var register=router.get('/', function(req, res, next) {
//      res.render('login/register',{title:'haha'});
// });
var routes = require('./routes/index');
var users = require('./routes/users');
var include_test = require('./routes/include_test');
var register = require('./routes/login/register');
var login = require('./routes/login/login');
var image_push = require('./routes/image_push');

// 接口数据
var user = require('./models/user');
var api = require('./models/api');
var api_register = require('./models/register');
var api_easymysql = require('./models/api_easymysql');
var api_user = require('./models/api_user');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

// 页面路由
app.use('/', routes);
app.use('/users', users);
app.use('/include_test', include_test);
app.use('/register', register);
app.use('/login', login);
app.use('/image_push', image_push);


//api路由
app.use('/api', api);
app.use('/user', user);
app.use('/api_register', api_register);
app.use('/api_easymysql', api_easymysql);
app.use('/api_user', api_user);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
