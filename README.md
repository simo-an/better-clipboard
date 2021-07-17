A better clipboard for Electron (NodeJS).

#### Install

```
npm i better-clipboard

electron-rebuild -f -w better-clipboard
```

#### Usage

```js
import { betterClipboard } from 'better-clipboard';

betterClipboard.readFilePathList(); // get the path of file which in clipboard
betterClipboard.readBufferList();
betterClipboard.readFileList();


betterClipboard.writeFileList([]); // write file into clipboard via file path
```

#### Webpack

If you are using webpack, simply add better-clipboard into externals:
```js
  config.externals = {
    'better-clipboard': 'commonjs better-clipboard'
  }
```

Hope you have a better experience when using clipboard in electron.
