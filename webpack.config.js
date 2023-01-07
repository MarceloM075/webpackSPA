const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const terserWebpack = require('terser-webpack-plugin')
const cssMinimizer = require('css-minimizer-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const htmlMinimizer = require('html-minimizer-webpack-plugin')
const { htmlPages } = require('./src/pages.js')

/////////////////////// ADDIND PAGES TO THE ARRAY //////////////////////////
const pages = []

//This function adds the pages into an array of htmlWebpackPlugin objects
function arrPages(htmlPages){  
    for(let i = 0; i <= htmlPages.length - 1; i++){
        pages.push(
            new htmlWebpackPlugin({
                    filename: 'paginas/' + htmlPages[i],
                    template: './src/paginas/' + htmlPages[i]
            })
        )
    }
}

arrPages(htmlPages)
////////////////////////////////////////////////////////////////////////////


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: __dirname + '/public'
    },
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ]
        },
        {
            test: /\.html$/,
            loader: 'html-loader',
            options: {
                sources: true
            }
        },
        {
            test: /\.(svg|png|gif|jpg)$/,
            type: "asset/resource",
            generator: {
                filename: './imgs/[name].[hash].[ext]'
            }
        }]   
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        }),
        new htmlWebpackPlugin({
            template: './src/index.html'
        }),
        ...pages
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new cssMinimizer({}),
            new terserWebpack(),
            new htmlMinimizer()
        ]
    },
    devServer: {
        static: "./public",
        port: 9000
    }
}