module.exports = function (app) {
    "use strict";

    var fs = app.msiGlobals.fs,
        Image = app.msiGlobals.models.ImageModel.model,
        uploadDir = app.get('uploadDir');

    var Controller = {
        name: "ImageController"
    };

    Controller.read = function(req, callback){

    };

    Controller.create = function(imageData, imageFile, callback){
        var tmp_path = imageFile.path;
        var serverPath = uploadDir + imageFile.name;

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
                        var image = new Image(imageData);
                        image.size = imageFile.size;
                        image.mimeType = imageFile.type;
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