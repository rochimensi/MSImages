"use strict";

module.exports = function() {
    var Mongoose = require('mongoose');

    var imageSchema = new Mongoose.Schema({
        title: {type: String, required: true},
        contributor: {type: String},
        description: {type: String},
        tags: [
            {type: String}
        ],
        downloads: {type: Number},
        views: {type: Number},
        uploadedOn: { type: Date, default: Date.now },
        lastDownload: {type: Date},
        fileExtension: {type: String},
        size: {type: String},
        dimensions: {
            height: {type: Number},
            width: {type: Number}
        },
        shape: {type: String}
    });

    return {
        name: "ImageModel",
        model: Mongoose.model('Image', imageSchema)
    };
};