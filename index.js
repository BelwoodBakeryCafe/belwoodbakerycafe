const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
app.set('port', port);

// ROUTES GO HERE


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'dist/index.html'));
    });
} else {
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const webpack = require('webpack');
    const webpackConfig = require('./webpack.config.js');
    app.use(webpackDevMiddleware(webpack(webpackConfig), {
        noInfo: true,
        silent: true,
        stats: 'errors-only',
    }));
    app.use(webpackHotMiddleware(webpack(webpackConfig)));
}

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}/`);
});