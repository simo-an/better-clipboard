import {readBuffer, readFile} from "./tools";
import * as path from 'path';
const better_clipboard = require('bindings')('better_clipboard.node');

interface NativeClipboard {
    readFiles(): string[],
    writeFiles(filePathList: string[]): void,
}

class BetterClipboard {
    private nativeClipboard: NativeClipboard = better_clipboard;
    constructor() {
    }

    public readFilePathList(): string[] {
        return this.nativeClipboard.readFiles();
    }

    public readBufferList(): Promise<Buffer[]> {
        const filePathList = this.readFilePathList();
        const bufferList = [];

        filePathList.forEach((filePath) => {
            if (!path.isAbsolute(filePath)) return ;

            bufferList.push(readBuffer(filePath))
        });

        return Promise.all(bufferList);
    }

    public readFileList(): Promise<File[]> {
        const filePathList = this.readFilePathList();
        const fileList = [];

        filePathList.forEach((filePath) => {
            if (!path.isAbsolute(filePath)) return ;

            fileList.push(readFile(filePath))
        });

        return Promise.all(fileList);
    }

    public writeFileList(filePathList: string[]): void {
        return this.nativeClipboard.writeFiles(filePathList);
    }
}

export default BetterClipboard;
