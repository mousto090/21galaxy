var createError = require('http-errors');
var express = require('express');
var path = require('path');
const compression = require('compression');
const helmet = require('helmet');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const appRouter = require('./routes/routes');
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();
//Compress all routes
app.use(compression());
app.use(helmet());

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('views', [path.join(__dirname, 'views'),
    path.join(__dirname, 'views/pages')
]);
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(appRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;