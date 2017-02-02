const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

  entry: {
    app: './src/main.js',
    vendor: './src/vendor.js'
  },

  resolve: {
    alias: {
      vue$: 'vue/dist/vue.common.js',
      api:        path.resolve(__dirname, '../src/api/'),
      components: path.resolve(__dirname, '../src/components/'),
      store:      path.resolve(__dirname, '../src/store/')
    },
    extensions: ['.js', '.json']
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'mainfest']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
}
