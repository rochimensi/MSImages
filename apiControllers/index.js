/**
 * Created on 20/04/2014.
 * If the module path passed to require()resolves to a directory, Node will look for an indexfile within the
 * directory.
 */
module.exports = function (app) {
    "use strict";
    var fs = require('fs'),
        path = require('path'),
        log = app.msiGlobals.log;

    app.msiGlobals.controllers = app.msiGlobals.controllers || [];

    fs.readdirSync(__dirname).forEach(function (fileName) {
        if (fileName !== "index.js" && path.extname(fileName) === '.js') {
            var controller = require(path.join(__dirname, fileName))(app);
            if (controller && controller.name) {
                log.info('Loading API controller: ' + controller.name);
                app.msiGlobals.controllers[controller.name] = controller;
            }
        }
    });
};
