'use script';
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpackParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');

var config = {
    entry: {
        'index': './index.js'
    },

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "[name].js",
        publicPath: "../dist/"
    },

    module: {
        rules: [{
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader'
                }],
                exclude: /node_modules/
            },
            {
                test: /\.ejs$/,
                use: 'ejs-loader'
            },
            {
                test: /\.s(a|c)ss$/,
                use: [{
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader',
                        options: {
                            localIdentName: '[name]-[local]-[hash:base64:5]',
                            module: false,
                            autoprefixer: true,
                            minimize: true
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]

            }
        ]
    },
    plugins: [

    ]

}

if (process.env.NODE_ENV == 'development') {
    config.mode = 'development';
    config.plugins.push(new webpackParallelUglifyPlugin({
        uglifyJS: {
            warnings: true,
            compress: {
                drop_console: true
            }
        },
    }))
} else {
    config.mode = 'production';
}

module.exports = config;