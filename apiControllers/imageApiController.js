module.exports = function (app) {
    "use strict";

    var fs = app.msiGlobals.fs,
        q = app.msiGlobals.q,
        ImageController = app.msiGlobals.controllers.ImageController,
        imageController_list = q.denodeify(ImageController.list),
        imageController_read = q.denodeify(ImageController.read),
        imageController_create = q.denodeify(ImageController.create),
        imageController_edit = q.denodeify(ImageController.update),
        imageController_delete = q.denodeify(ImageController.delete);

    var Controller = {
        name: "ImageApiController"
    };

    Controller.list = function(req, res){
        imageController_list(req.query)
            .then(function(data) {
                res.send(200, data)
            }, function(error) {
                res.send(error)
            });
    };

    Controller.read = function(req, res){
        imageController_read(req.params.id)
            .then(function(data) {
                res.send(200, data)
            }, function(error) {
                res.send(500, error)
            });
    };

    Controller.create = function(req, res){
        if(req.files.file) {
            imageController_create(req.body, req.files.file)
                .then(function (data) {
                    res.send(200, data)
                }, function (error) {
                    res.send(error)
                });
        } else res.send(400);
    };

    Controller.edit = function(req, res){
        imageController_edit(req.params.id, req.body, req.files.file)
            .then(function(data) {
                res.send(200, data)
            }, function(error) {
            res.send(error)
        });
    };

    Controller.delete = function(req, res){
        imageController_delete(req.params.id)
            .then(function(data) {
                res.send(200, data)
            }, function(error) {
                res.send(error)
            });
    };

    Controller.getContributors = function(req, res){
        var imageController_getContributors = q.denodeify(ImageController.getContributors);
        imageController_getContributors()
            .then(function(data){ res.send(200, data) }, function(error){ res.send(error) });
    };

    Controller.getTags = function(req, res){
        var imageController_getTags = q.denodeify(ImageController.getTags);
        imageController_getTags()
            .then(function(data){ res.send(200, data) }, function(error){ res.send(error) });
    };

    app.registerAction('get',    '/api/images/contributors', Controller.getContributors);
    app.registerAction('get',    '/api/images/tags', Controller.getTags);
    app.registerAction('get',    '/api/images',     Controller.list);
    app.registerAction('get',    '/api/images/:id', Controller.read);
    app.registerAction('post',   '/api/images',     Controller.create);
    app.registerAction('put',    '/api/images/:id', Controller.edit);
    app.registerAction('delete', '/api/images/:id', Controller.delete);

    return Controller;
};