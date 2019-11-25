var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

const COMMUNITY_URL = process.env.COMMUNITY_URL;
const APP_ID = process.env.APP_ID;
const APP_SECRET = process.env.APP_SECRET;
const OAUTH_CALLBACK_URL = process.env.OAUTH_CALLBACK_URL;
const HOSTED_APP_URL = process.env.HOSTED_APP_URL;
const BG_FAKE = process.env.BG_FAKE;
const STATIC_ASSET_URL = process.env.STATIC_ASSET_URL;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/** 
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var callbackRouter = require('./routes/callback');
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/_callback', callbackRouter) */

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

//Routes
app.get('/', function(req, res) {

    res.render('./routes/index', {
        community_url: COMMUNITY_URL,
        app_id: APP_ID,
        callback_url: OAUTH_CALLBACK_URL,
        community_mode: COMMUNITY_MODE
    })
});

app.get('/_callback', function(req, res) {

    res.render('./routes/callback', {
        community_url: COMMUNITY_URL,
        app_id: APP_ID,
        callback_url: OAUTH_CALLBACK_URL,
        community_mode: COMMUNITY_MODE
    })
});

module.exports = app;