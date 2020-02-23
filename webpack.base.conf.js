
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const PATHS = {
    src: path.join(__dirname, './src'),
    build: path.join(__dirname, './build'),
    assets: './assets/'
}

module.exports = {

    externals: {
        paths: PATHS
    },

    entry: `${PATHS.src}/index.js`,

    output: {
        filename: `${PATHS.assets}js/[name].js`,
        path: PATHS.build,
        publicPath: '',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                },
                exclude: '/node_modules/',
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    }, {
                        loader: 'postcss-loader',
                        options: { sourceMap: true, config: { path: `${PATHS.src}/js/postcss.config.js` } }
                    }, {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    }, {
                        loader: 'postcss-loader',
                        options: { sourceMap: true, config: { path: `${PATHS.src}/js/postcss.config.js` } }
                    },
                ]
            }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}css/[name].css`,
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/index.html`,
            filename: 'index.html',
        }),
        new CopyWebpackPlugin([
            { from: `${PATHS.src}/image`, to: `${PATHS.assets}image` },
            { from: `${PATHS.src}/fonts`, to: `${PATHS.assets}fonts` }
        ])
    ],
}