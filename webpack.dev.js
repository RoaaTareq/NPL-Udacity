const path = require('path')
const webpack = require('webpack')

const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: ['babel-regenerator-runtime','./src/client/index.js'],
    mode: 'development',
    devtool: 'source-map',
    stats: 'verbose',
    output: {
        libraryTarget: 'var',
        library: 'MyClient'
    },
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
            
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            
            }

        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/view/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin({
           
            dry: true,
           
            verbose: true,
           
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        })
    ]
}