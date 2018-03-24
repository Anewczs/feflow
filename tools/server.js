const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(middleware(compiler, {
    noInfo: true,
    publicPath: 'http://127.0.0.1:8080/dist',
    index: path.resolve(__dirname, '../index.html'),
    stats: {
        colors: true
    }
}));

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send(fs.readFileSync(path.join(__dirname, '../index.html')));
});

app.use(require("webpack-hot-middleware")(compiler));

app.listen(8080, () => console.log('Example app listening on port 3000!'))