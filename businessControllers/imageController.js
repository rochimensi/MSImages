module.exports = function (app) {
    "use strict";

    var fs = app.msiGlobals.fs,
        Image = app.msiGlobals.models.ImageModel.model,
        q = app.msiGlobals.q,
        uploadDir = app.get('uploadDir');

    var Controller = {
        name: "ImageController"
    };

    Controller.read = function(req, callback){

    };

    Controller.create = function(imageData, imageFile){
        var tmp_path = imageFile.path;
        var serverPath = uploadDir + imageFile.name;
        var fs_rename = q.denodeify(fs.rename);
        var fs_unlink = q.denodeify(fs.unlink);

        return fs_rename(tmp_path, serverPath)
            .then(function() { return fs_unlink(tmp_path) })
            .then(function(){
                var image = new Image(imageData);
                image.size = imageFile.size;
                image.mimeType = imageFile.type;
                image.path = serverPath;
                return image.save();
            });
    };

    Controller.edit = function(req, callback){

    };

    Controller.delete = function(req, callback){

    };

    return Controller;
};