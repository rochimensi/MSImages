var express = require('express'),
    app = module.exports = express(),
    db = require('./config/db'),
    fs = require('fs'),
    http = require('http'),
    path = require('path');

app.msiGlobals = {};

app.msiGlobals.log = require(path.join(__dirname, './utils/logger'))();
require(path.join(__dirname, '/models'))(app);
require(path.join(__dirname, '/businessControllers'))(app);
require(path.join(__dirname, '/apiControllers'))(app);

app.set('port', process.env.PORT || 4040);
app.set('uploadDir', __dirname + '/public/uploads/');

app.use(express.bodyParser({keepExtensions:true}));
app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res){
    res.sendfile(__dirname + "/public/index.html");
});

app.get('/uploads', function(req, res){
    fs.readFile(__dirname + '/uploads/Ro', "binary", function(error, file) {
        if(error) {
            res.writeHead(500, {"Content-Type": "text/plain"});
            res.write(error + "\n");
            res.end();
        } else {

            res.writeHead(200, {"Content-Type": "image/png"});
            res.write(file, "binary");

        }
    });
});

app.post('/', function(req, res){
    var tmp_path = req.files.uploadedfile.path;
    var serverPath = app.get('uploadDir') + req.files.uploadedfile.name;

    fs.rename(tmp_path, serverPath, function(error){
        if(error) {
            res.send(error);
            return;
        }
        else {
            fs.unlink(tmp_path, function() {
                if (error) throw error;
                res.send('File uploaded to: ' + serverPath + ' - ' + req.files.uploadedfile.size + ' bytes');
            });
        }
    });
    console.log(req.files);
    console.log("------");
    console.log(req.body);
});

http.createServer(app).listen(app.get('port'), function() {
    app.msiGlobals.log.info('Express server listening on port ' + app.get('port'));
});