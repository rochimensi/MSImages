/**
 * Created on 19/04/2014.
 * If the module path passed to require()resolves to a directory, Node will look for an indexfile within the
 * directory.
 */
module.exports = function (app) {
    "use strict";
    var fs = require('fs'),
        path = require('path'),
        log = app.msiGlobals.log;

    app.msiGlobals.models = app.msiGlobals.models || [];

    fs.readdirSync(__dirname).forEach(function (fileName) {
        if (fileName !== "index.js" && fileName !== "db.js" &&path.extname(fileName) === '.js') {
            var model = require(path.join(__dirname, fileName))(app);
            if (model && model.name) {
                log.info('Loading model: ' + model.name);
                app.msiGlobals.models[model.name] = model;
            }
        }
    });
};
