const merge = require('webpack-merge')
const os = require('os')
// const HappyPack = require('happypack')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const webpackBaseConfig = require('./webpack.base.config')

// const threads = os.cpus().length

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  performance: {
    hints: 'warning', // 提示类型
  },
  devtool: false,
  plugins: [
    // 清除包
    // new CleanWebpackPlugin(),
    // 打包加速
    // new HappyPack({
		// 	threads,
		// 	id: 'jsx',
		// 	loaders: ['babel-loader']
		// }),
  ]
})