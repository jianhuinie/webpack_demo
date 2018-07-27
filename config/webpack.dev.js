const path = require('path');
const webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin');
const uglify = require('uglifyjs-webpack-plugin');
//分离样式
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const extractTextWebpackPlugin = require('extract-text-webpack-plugin'); //不推荐使用了
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: {
        main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
        publicPath: "http://localhost:8888/"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // use: [
                //     {loader: "style-loader"},
                //     {loader: "css-loader"}
                // ]
                loaders: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.less$/,
                loaders: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader', 'postcss-loader']
            },
            {
                test: /\.(png|jpg|gif|jpeg)/,  
                use: [
                    {
                        loader:'url-loader', 
                        options: {
                            limit: 8192,
                            outputPath:'images/'  
                        }
                    }
                ]
            },
            {
                test: /\.(woff|svg|woff2|eot|ttf|otf)$/,
                loader: 'url-loader'
            },
            {
                test:/\.(jsx|js)$/,
                use:{
                    loader:'babel-loader'
                    // options:{
                    //     presets:[
                    //         "es2015","react"
                    //     ]
                    // }
                },
                exclude:/node_modules/
            }
        ]
    },
    plugins: [
        new htmlPlugin({
            minify: { 
                removeAttributeQuotes: true  
            },
            hash: true, 
            template: './src/index.html'
           
        }),
        new uglify(),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].[id].css'
        }),
        new CleanWebpackPlugin([path.resolve(__dirname, '../dist')], {
            root: path.resolve(__dirname, '../') 
        }),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        host: 'localhost',
        compress: true,
        hot: true,
        port: 8888
    },
    optimization: {
        minimizer: [
          new OptimizeCssAssetsPlugin({})
        ]
    },
};