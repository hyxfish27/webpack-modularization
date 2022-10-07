const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist/'),
    clean: true
  },
  module: {
    rules: [
      {
        // css loader
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        // file loader
        test: /\.(jpg|gif|png)$/,
        use: ['file-loader']
      },
      {
        // vue-loader ??
      },
      {
        // typescript-loader ??
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin(),
    new CssMinimizerWebpackPlugin()
  ],
  devServer: {
    port: 9090
  },
  optimization: {
    minimizer: [
      new CssMinimizerWebpackPlugin()
    ]
  }
}
