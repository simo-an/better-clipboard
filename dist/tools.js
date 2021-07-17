"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readFile = exports.readBuffer = void 0;
var fs = require("fs");
var path = require("path");
var readBuffer = function (filePath) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filePath, function (err, fileBuffer) {
            resolve(err ? null : fileBuffer);
        });
    });
};
exports.readBuffer = readBuffer;
var readFile = function (filePath) {
    return new Promise(function (resolve, reject) {
        exports.readBuffer(filePath).then(function (buffer) {
            if (!buffer)
                resolve(null);
            var file = new File([buffer], "" + path.basename(filePath));
            resolve(file);
        });
    });
};
exports.readFile = readFile;
