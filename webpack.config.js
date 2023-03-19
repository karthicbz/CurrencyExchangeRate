const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const cssMinimizer = require('css-minimizer-webpack-plugin');
const terserPlugin = require('terser-webpack-plugin');

module.exports={
    mode:'production',
    entry: './src/scripts/index.js',
    output:{
        filename: 'main.[hash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    optimization:{
        minimizer:[new cssMinimizer(), new terserPlugin()],
    },
    plugins:[
        new htmlWebpackPlugin({
            template: './src/index.html',
        }),
        new miniCssExtractPlugin({
            filename: '[name].[hash].css',
        })
    ],
    devtool: 'inline-source-map',
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    miniCssExtractPlugin.loader,
                    'css-loader'
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test:/\.html$/,
                loader: 'html-loader',
            }
        ],
    }
}