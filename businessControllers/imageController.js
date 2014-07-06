module.exports = function (app) {
    "use strict";

    var fs = app.msiGlobals.fs,
        Image = app.msiGlobals.models.ImageModel.model,
        FileController = app.msiGlobals.controllers.FileController,
        uploadDir = app.get('uploadDir');

    var Controller = {
        name: "ImageController"
    };

    Controller.list = function(options){

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
        FileController.saveFile(imageFile, function(error, serverPath){
            if(error){
                callback(error);
                return;
            } else {
                Image.createImage(imageData, imageFile, serverPath, function(error, image){
                   callback(error, image);
                });
            }
        });
    };

    Controller.update = function(imageId, imageData, imageFile, callback){
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
                    FileController.deleteFile(image.path, function(error){
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

    return Controller;
};