const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.resolve(__dirname, './client'),
  dist: path.resolve(__dirname, './dist'),
  style: [path.resolve(__dirname, './styles')],
};

const VENDOR_LIBS = ['react-hot-loader/patch', 'lodash', 'react', 'react-dom', 'redux', 'react-router', 'react-router-bootstrap', 'react-redux', 'react-router-redux'];

module.exports = {
  entry: {
    app: [PATHS.app],
    vendor: VENDOR_LIBS,
  },
  output: {
    path: PATHS.dist,
    filename: '[name].[hash].js',
    publicPath: '/',
  },
  module: {
    rules: [{
        test: /.*\.jsx?$/,
        use: ['react-hot-loader/webpack', 'babel-loader'],
        include: PATHS.app,
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        include: PATHS.style,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'BelwoodBakeryCafe',
      template: PATHS.app + '/index.html',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
};
