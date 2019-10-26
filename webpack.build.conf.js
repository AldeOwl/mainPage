const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');


const buildConfig = merge(baseConfig, {
    mode: 'production',
    plugins: []
})

module.exports = new Promise((resolse, reject) => {
    resolse(buildConfig)
})