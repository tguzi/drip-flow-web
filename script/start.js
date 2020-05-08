const merge = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')

const webpackBaseConfig = require('./webpack.base.config')

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  output: {
    pathinfo: true, // 开发环境，显示模块信息
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  // 开发环境配置
  devServer: {
    compress: true,
    port: 3000
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})