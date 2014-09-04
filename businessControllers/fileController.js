module.exports = function (app) {
    "use strict";

    var fs = app.msiGlobals.fs,
        log = app.msiGlobals.log,
        path = require('path'),
        uploadDir = app.get('uploadDir');

    var Controller = {
        name: "FileController"
    };

    var getExtension = function(filename) {
        var ext = path.extname(filename||'').split('.');
        return ext[ext.length - 1];
    };

    Controller.saveFile = function(file, name, callback) {
        var tmp_path = file.path;
        var serverPath = uploadDir + name + '.' + getExtension(file.name);

        fs.rename(tmp_path, serverPath, function(error){
            if(error) {
                callback(error);
                return;
            }
            else callback(error, serverPath);
        });
    };

    Controller.deleteFile = function(serverPath, callback){
        fs.unlink(serverPath, function (error) {
            if (error) throw error;
            else {
                log.info('Successfully deleted '+ serverPath);
                callback(error);
            }
        });
    };

    return Controller;
};