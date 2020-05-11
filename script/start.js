const merge = require('webpack-merge')
const webpack = require('webpack')

const webpackBaseConfig = require('./webpack.base.config')

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  output: {
    pathinfo: true, // 开发环境，显示模块信息
    publicPath: '/'
  },
  // 性能提示
  performance: {
    hints: false,
  },
  devtool: 'inline-source-map',
  // 开发环境配置
  devServer: {
    port: 3000,
    historyApiFallback: true,
    inline: true,
    hot: true,
    open: true,
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              // 指定启用css modules
              import: false,
              modules: true,
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: [require('autoprefixer')],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
})