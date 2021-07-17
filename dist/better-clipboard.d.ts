/// <reference types="node" />
declare class BetterClipboard {
    private nativeClipboard;
    constructor();
    readFilePathList(): string[];
    readBufferList(): Promise<Buffer[]>;
    readFileList(): Promise<File[]>;
    writeFileList(filePathList: string[]): void;
}
export default BetterClipboard;
