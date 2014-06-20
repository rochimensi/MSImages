"use strict";

module.exports = function() {
    var Mongoose = require('mongoose');
    var uuid = require('node-uuid');

    var ImageSchema = new Mongoose.Schema({
        name: {type: String, required: true},
        contributor: {type: String},
        description: {type: String},
        tags: [
            {type: String}
        ],
        downloads: {type: Number, default: 0},
        views: {type: Number, default: 0},
        uploadedOn: { type: Date, default: Date.now },
        lastDownload: {type: Date},
        mimeType: {type: String},
        size: {type: String},
        dimensions: {
            height: {type: Number},
            width: {type: Number}
        },
        shape: {type: String},
        path: {type: String}
    });

    ImageSchema.pre('save', function (next) {
        if (this._id === undefined) {
            this._id = uuid.v1();
        }
        next();
    });

    return {
        name: "ImageModel",
        model: Mongoose.model('Image', ImageSchema)
    };
};