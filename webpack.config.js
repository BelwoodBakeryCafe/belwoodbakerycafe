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
        app: [PATHS.app + '/app.jsx', 'webpack/hot/only-dev-server'],
        vendor: VENDOR_LIBS,
        client: ['webpack-hot-middleware/client?reload=true']
    },
    output: {
        path: PATHS.dist,
        filename: '[name].[hash].js',
        publicPath: '/'
    },
    devServer: {
        contentBase: PATHS.app, // New
        hot: true,
        publicPath: '/'
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                use: ['react-hot-loader', 'babel-loader'],
                include: PATHS.app,
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: 'file-loader'
            }
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
        }),
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally
        new webpack.NamedModulesPlugin()
        // prints more readable module names in the browser console on HMR updates
    ],
    resolve: {
        //Empty string needed. 
        extensions: ['.js', '.jsx']
    },
    externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    },
    devtool: 'source-map'
};