module.exports = function (app) {
    "use strict";

    var fs = app.msiGlobals.fs,
        q = app.msiGlobals.q,
        ImageController = app.msiGlobals.controllers.ImageController,
        imageController_read = q.denodeify(ImageController.read),
        imageController_create = q.denodeify(ImageController.create),
        imageController_edit = q.denodeify(ImageController.edit),
        imageController_delete = q.denodeify(ImageController.delete);

    var Controller = {
        name: "ImageApiController"
    };

    Controller.list = function(req, res){
        imageController_read(req)
            .then(function(data) {
                res.send(200, data)
            }, function(error) {
                res.send(error)
            });
    };

    Controller.read = function(req, res){
        imageController_read(req)
            .then(function(data) {
                res.send(200, data)
            }, function(error) {
                res.send(error)
            });
    };

    Controller.create = function(req, res){
        imageController_create(req)
            .then(function(data) {
                res.send(200, data)
            }, function(error) {
                res.send(error)
            });
    };

    Controller.edit = function(req, res){
        imageController_edit(req)
            .then(function(data) {
                res.send(200, data)
            }, function(error) {
            res.send(error)
        });
    };

    Controller.delete = function(req, res){
        imageController_delete(req)
            .then(function(data) {
                res.send(200, data)
            }, function(error) {
                res.send(error)
            });
    };

    app.registerAction('get',    '/images',     Controller.list);
    app.registerAction('get',    '/images/:id', Controller.read);
    app.registerAction('post',   '/images',     Controller.create);
    app.registerAction('put',    '/images/:id', Controller.edit);
    app.registerAction('delete', '/images/:id', Controller.delete);

    return Controller;
};