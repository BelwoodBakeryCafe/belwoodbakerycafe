const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.resolve(__dirname, './client'),
  dist: path.resolve(__dirname, './dist'),
  style: [path.resolve(__dirname, './client/styles')]
}

module.exports = {
  entry: PATHS.app + '/app.jsx', 
  output: {
    path: PATHS.dist,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.jsx$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'BelwoodBakeryCafe',
      template: PATHS.app + '/index.html'
    })
  ],
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }
};
