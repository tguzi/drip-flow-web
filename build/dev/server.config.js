const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const {
  CheckerPlugin,
  TsConfigPathsPlugin,
} = require('awesome-typescript-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const baseConfig = require('../webpack.config');

//定一个通用的路径转换方法
const resolve = (pathStr) => path.resolve(__dirname, pathStr);

module.exports = merge(baseConfig, {
  mode: 'development',
  entry: resolve('../../src/server/index.ts'), //入口文件
  target: 'node',
  output: {
    filename: 'index.js', //设置打包后的文件名
    path: resolve('../../dist/server'), //设置构建结果的输出目录
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      //定义dist 目录别名，方便导入模块
      '@dist': path.resolve(__dirname, '../dist'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'awesome-typescript-loader',
        },
        include: [resolve('../../src/server')],
        exclude: [/node_modules/, resolve('../../src/client')],
      },
      // TODO: node端移除CSS部分, node引入组件，从而引入css
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new TsConfigPathsPlugin({
      configFileName: resolve('../../tsconfig.json'),
      transpileOnly: true,
    }),
    new CheckerPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css', //设置名称
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: '"development"' },
      __IS_PROD__: false,
    }),
    // noCssPlugin()
  ],
});
