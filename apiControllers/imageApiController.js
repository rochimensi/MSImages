module.exports = function (app) {
    "use strict";

    var fs = app.msiGlobals.fs,
        q = app.msiGlobals.q,
        ImageController = app.msiGlobals.controllers.ImageController;

    var Controller = {
        name: "ImageApiController"
    };

    Controller.list = function(req, res){
        var imageController_list = q.denodeify(ImageController.list);
        imageController_list()
            .then(function(data) {res.send(200, data)}, function(error) {res.send(error)});
    };

    Controller.read = function(req, res){
        var imageController_read = q.denodeify(ImageController.read);
        imageController_read(req.params.id)
            .then(function(data) {res.send(200, data)}, function(error) {res.send(error)});
    };

    Controller.create = function(req, res){
        if(req.files.file) {
            var imageController_create = q.denodeify(ImageController.create);
            imageController_create(req.body, req.files.file)
                .then(function (data) {res.send(200, data)}, function (error) {res.send(error)});
        } else res.send(400);
    };

    Controller.edit = function(req, res){
        var imageController_edit = q.denodeify(ImageController.edit);
        imageController_edit(req.params.id, req.body)
            .then(function(data) {res.send(200, data)}, function(error) {res.send(error)});
    };

    Controller.delete = function(req, res){
        var imageController_delete = q.denodeify(ImageController.delete);
        imageController_delete(req.params.id)
            .then(function(data) {res.send(200, data)}, function(error) {res.send(error)});
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

    Controller.download = function(req, res){
        var imageController_read = q.denodeify(ImageController.read);
        imageController_read(req.params.id)
        .then(function(data) {
            var path = data.path;
            res.download(path);
        }, function(error) {res.send(error)});
    };

    app.registerAction('get',    '/api/images/contributors', Controller.getContributors);
    app.registerAction('get',    '/api/images/tags', Controller.getTags);
    app.registerAction('get',    '/api/images',     Controller.list);
    app.registerAction('get',    '/api/images/:id', Controller.read);
    app.registerAction('post',   '/api/images',     Controller.create);
    app.registerAction('put',    '/api/images/:id', Controller.edit);
    app.registerAction('delete', '/api/images/:id', Controller.delete);
    app.registerAction('get',    '/api/images/download/:id', Controller.download);

    return Controller;
};