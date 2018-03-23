'use script';
var path = require('path');
var webpackParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');

module.exports = {
    entry: './index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[chunkhash].js",
        publicPath:"/assets/"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader'
                }],
                exclude: /node_modules/
            },
            {
                test: /\.s(a|c)ss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader', 
                    use: [{
                            loader: 'css-loader',
                            options: {
                                localIdentName: '[name]-[local]-[hash:base64:5]',
                                module: false,
                                autoprefixer: true,
                                minimize: true
                            }
                        },
                        { 
                            loader: 'postcss-loader' 
                        },{
                            loader: 'sass-loader'
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new webpackParallelUglifyPlugin({
            uglifyJS: {
                warnings: true,
                compress: {
                    drop_console: true
                }
            },
        })
    ]

}