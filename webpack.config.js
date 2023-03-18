const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    mode:'development',
    entry: './src/scripts/index.js',
    output:{
        filename: 'main.[hash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins:[
        new htmlWebpackPlugin({
            template: './src/index.html',
        })
    ],
    devtool: 'inline-source-map',
    module:{
        rules:[
            {
                test:'/\.css$/',
                use:[
                    'style-loader',
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
                test:'/\.html$/',
                loader: 'html-loader',
            }
        ],
    }
}