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
    const webpackMiddleware = require('webpack-dev-middleware');
    const webpack = require('webpack');
    const webpackConfig = require('./webpack.config.js');
    app.use(webpackMiddleware(webpack(webpackConfig)));
}

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}/`);
});