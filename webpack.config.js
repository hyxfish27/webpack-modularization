const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist/')

  },
  // module: {
  //   rules: [
  //     {
  //       // css-loader
  //     },
  //     {
  //       // file-loader
  //     },
  //     {
  //       // vue-loader ??
  //     },
  //     {
  //       // typescript-loader ??
  //     }
  //   ]
  // },
  // plugin: []
  devServer: {
    port: 9090
  }
}
