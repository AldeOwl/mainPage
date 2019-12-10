const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');


const devConfig = merge(baseConfig, {
    mode: 'development',

    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: baseConfig.externals.paths.build,
        overlay: true,
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        })
    ]
})

module.exports = new Promise((resolse, reject) => {
    resolse(devConfig)
})
