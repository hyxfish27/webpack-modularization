const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const path = require('path')

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].[contenthash].js',
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
        // swc loader
        test: /\.m?js$/,
        use: {
          loader: 'swc-loader'
        },
        exclude: /(node_modules|bower_components)/
      }
      // {
      // babel loader
      //   test: /\.m?js$/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/preset-env']
      //     }
      //   },
      //   exclude: /(node_modules|bower_components)/
      // }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.[contenthash].html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css'
    }),
    new CssMinimizerWebpackPlugin(),
    new TerserWebpackPlugin()
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist/')
    },
    port: 9090
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerWebpackPlugin(),
      new TerserWebpackPlugin()
    ],
    splitChunks: {
      cacheGroups: {
        common: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          name: 'vendors'
        }
      }
    }
  },
  devtool: 'inline-source-map',
  performance: { hints: false }
}
