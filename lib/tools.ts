import * as fs from "fs";
import * as path from "path";

export const readBuffer = (filePath: string): Promise<Buffer> => {
    return new Promise<Buffer>((resolve, reject) => {
        fs.readFile(filePath, (err, fileBuffer) => {
            resolve(err ? null : fileBuffer);
        });
    })
}

export const readFile = (filePath: string): Promise<File> => {
    return new Promise<File>((resolve, reject) => {
        readBuffer(filePath).then(buffer => {
            if (!buffer) resolve(null);

            const file = new File([buffer], `${path.basename(filePath)}`);

            resolve(file);
        });
    })
}
