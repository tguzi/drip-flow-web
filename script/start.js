const merge = require('webpack-merge')
const webpack = require('webpack')

const webpackBaseConfig = require('./webpack.base.config')

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  output: {
    // pathinfo: true, // 开发环境，显示模块信息
    publicPath: '/'
  },
  // 性能提示
  performance: {
    hints: false, // 提示类型
    maxAssetSize: 1024 * 1024 * 3,
    maxEntrypointSize: 1024 * 1024 * 5,
  },
  devtool: 'inline-source-map',
  // 开发环境配置
  devServer: {
    port: 3000,
    historyApiFallback: true,
    inline: true,
    hot: true,
    // open: true,
    clientLogLevel: 'none',
    compress: true,
  },
  module: {
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
})