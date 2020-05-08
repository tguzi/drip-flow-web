const merge = require('webpack-merge')

const webpackBaseConfig = require('./webpack.base.config')

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  performance: {
    hints: 'warning', // 提示类型
  },
  devtool: false,
  plugins: [
  ]
})