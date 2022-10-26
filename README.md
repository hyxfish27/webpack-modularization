# webpack-modularization
## version
use node 14
- webpack 5.74.0
- webpack-cli 4.10.0

## install dependencies
```
yarn
```

start webpack
```
yarn build
yarn build:dev
yarn build:prod
yarn serve
```

## loader
### swc-loader
類似 babel，但是速度較快，用來將較高版本的 Javascript 轉換成舊版瀏覽器相容的語法

## plugin
### CssMinimizerWebpackPlugin
能夠壓縮 CSS，並且優化 CSS 的打包流程
### TerserWebpackPlugin
webpack 的其中一種壓縮 js 的 plugin，能夠並行處理多個子任務，提高打包效率