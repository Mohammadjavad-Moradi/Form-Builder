const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        index: 'index.html',
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    'svg-inline-loader'
                ]

            },
            {
                test: /\.css/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            // {
            //     test: /\.css$/,
            //     use: [
            //         MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
            //     ]
            // },
            {
                test: /\.js/,
                exclude: /node-module/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/env'],
                        plugins: [ 'transform-class-properties']
                    }
                }
            }
        ]
    },
    plugins: [
        new TerserPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./index.html"
        })
    ]
};