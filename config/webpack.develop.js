const path = require('path')
const webpackMerge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

module.exports = webpackMerge(commonConfig, {

  devtool: '#eval-source-map',

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: 'http://localhost:8080/'
  },

  devServer: {
    historyApiFallback: true,
    noInfo: false,
    contentBase: [path.join(__dirname, 'dist'), path.join(__dirname, 'data')],
    compress: true,
    port: 8080
  }

});
