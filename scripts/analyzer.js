const merge = require('webpack-merge')
const baseConf = require('./webpack.base.config')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = merge(baseConf, {
  devtool: 'source-map',
  mode: 'development',
  plugins: [
     new BundleAnalyzerPlugin()
  ]
})