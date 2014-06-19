module.exports = function (app) {
    "use strict";

    var fs = app.msiGlobals.fs;
    var Image = app.msiGlobals.models.ImageModel.model;
    var uploadDir = app.get('uploadDir');

    var Controller = {
        name: "ImageController"
    };

    Controller.read = function(req, callback){

    };

    Controller.create = function(req, callback){
        var tmp_path = req.files.file.path;
        var serverPath = uploadDir + req.files.file.name;

        fs.rename(tmp_path, serverPath, function(error){
            if(error) {
                callback(error);
                return;
            }
            else {
                fs.unlink(tmp_path, function() {
                    if (error) {
                        throw error;
                    } else {
                        var file = req.files.file;
                        var image = new Image(req.body);
                        image.size = file.size;
                        image.mimeType = file.type;
                        image.path = serverPath;
                        image.save(function (error, image) {
                            callback(error, image);
                        });
                    }
                });
            }
        });
    };

    Controller.edit = function(req, callback){

    };

    Controller.delete = function(req, callback){

    };

    return Controller;
};