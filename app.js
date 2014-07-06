var express = require('express'),
    app = module.exports = express(),
    db = require('./config/db'),
    fs = require('fs'),
    http = require('http'),
    path = require('path'),
    log = require(path.join(__dirname, './utils/logger'))(),
    q = require('q');

app.msiGlobals = {};
app.msiGlobals.fs = fs;
app.msiGlobals.log = log;
app.msiGlobals.path = path;
app.msiGlobals.q = q;

app.use(express.bodyParser({keepExtensions:true}));
app.set('uploadDir', __dirname + '/public/uploads/');

app.registerAction = function(httpMethod, url, callback){
    log.info('registering action for ' + httpMethod + ' ' + url);
    var urlAndCallback = [url];
    urlAndCallback.push(callback);
    app[httpMethod].apply(app, urlAndCallback);
};

require(path.join(__dirname, '/models'))(app);
require(path.join(__dirname, '/businessControllers'))(app);
require(path.join(__dirname, '/apiControllers'))(app);

app.set('port', process.env.PORT || 4040);

app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res){
    res.sendfile(__dirname + "/public/index.html");
});

http.createServer(app).listen(app.get('port'), function() {
    app.msiGlobals.log.info('Express server listening on port ' + app.get('port'));
});