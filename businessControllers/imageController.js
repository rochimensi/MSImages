module.exports = function (app) {
    "use strict";

    var fs = app.msiGlobals.fs,
        log = app.msiGlobals.log,
        Image = app.msiGlobals.models.ImageModel.model,
        FileController = app.msiGlobals.controllers.FileController,
        uuid = require('node-uuid'),
        uploadDir = app.get('uploadDir');

    var Controller = {
        name: "ImageController"
    };

    Controller.list = function(callback){
        Image.getImages(function(error, images){
            if(error){
                callback(error);
                return;
            } else callback(error, images);
        });
    };

    Controller.read = function(imageId, callback){
        Image.findById(imageId, function(error, image){
           if(error){
               callback(error);
               return;
           } else if(!image) {
               callback(404);
           } else callback(error, image);
        });
    };

    Controller.create = function(imageData, imageFile, callback){
        var _id = uuid.v1();
        FileController.saveFile(imageFile, _id, function(error, serverPath){
            if(error){
                callback(error);
                return;
            } else {
                imageData._id = _id;
                imageData.fileName = imageFile.name;
                Image.createImage(imageData, imageFile, serverPath, function(error, image){
                   callback(error, image);
                });
            }
        });
    };

    Controller.update = function(imageId, imageData, callback){
        Image.findByIdAndUpdate(imageId, imageData, function(error, image){
            if(error){
                callback(error);
                return;
            } else if(!image) {
                callback(404);
            } else callback(error, image);
        });
    };

    Controller.delete = function(imageId, callback){
        Image.findByIdAndRemove(imageId, function(error, image){
            if(error){
                callback(error);
                return;
            } else {
                if(!image) {
                    callback(404);
                } else {
                    FileController.deleteFile(image.absolutPath, function(error){
                        if(error){
                            callback(error);
                            return;
                        } else callback(error, image);
                    });
                }
            }
        });
    };

    Controller.getContributors = function(callback){
        Image.getContributors(function(error, contributors){
            if(error) {
                callback(error);
                return;
            } else callback(error, contributors);
        });
    };

    Controller.getTags = function(callback){
        Image.getTags(function(error, tags){
            if(error) {
                callback(error);
                return;
            } else callback(error, tags);
        });
    };

    Controller.getAlbums = function(callback){
        Image.getAlbums(function(error, albums){
            if(error) {
                callback(error);
                return;
            } else callback(error, albums);
        });
    };

    Controller.addDownload = function(image, callback){
        Image.findByIdAndUpdate(image._id, { $inc : { downloads : 1 }}, function(error){
            callback(error);
        });
    };

    return Controller;
};