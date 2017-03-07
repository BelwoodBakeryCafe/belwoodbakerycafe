const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.resolve(__dirname, './client'),
  dist: path.resolve(__dirname, './dist'),
  style: [path.resolve(__dirname, './client/styles')],
  vendor: path.resolve(__dirname, './vendor.jsx')
};

const VENDOR_LIBS = ['lodash', 'react', 'react-dom', 'react-redux', 'react-router', 'react-router-bootstrap', 'react-router-redux', 'redux', 'redux-form', 'redux-thunk'];

module.exports = {
  entry: { 
    app: PATHS.app + '/app.jsx',
    vendor: VENDOR_LIBS
  },
  output: {
    path: PATHS.dist,
    filename: '[name].[chunkhash].js',
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
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }), 
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }
};
