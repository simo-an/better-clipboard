"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = require("./tools");
var path = require("path");
var better_clipboard = require('bindings')('better_clipboard.node');
var BetterClipboard = /** @class */ (function () {
    function BetterClipboard() {
        this.nativeClipboard = better_clipboard;
    }
    BetterClipboard.prototype.readFilePathList = function () {
        return this.nativeClipboard.readFiles();
    };
    BetterClipboard.prototype.readBufferList = function () {
        var filePathList = this.readFilePathList();
        var bufferList = [];
        filePathList.forEach(function (filePath) {
            if (!path.isAbsolute(filePath))
                return;
            bufferList.push(tools_1.readBuffer(filePath));
        });
        return Promise.all(bufferList);
    };
    BetterClipboard.prototype.readFileList = function () {
        var filePathList = this.readFilePathList();
        var fileList = [];
        filePathList.forEach(function (filePath) {
            if (!path.isAbsolute(filePath))
                return;
            fileList.push(tools_1.readFile(filePath));
        });
        return Promise.all(fileList);
    };
    BetterClipboard.prototype.writeFileList = function (filePathList) {
        console.log(this.nativeClipboard);
        return this.nativeClipboard.writeFiles(filePathList);
    };
    return BetterClipboard;
}());
exports.default = BetterClipboard;
