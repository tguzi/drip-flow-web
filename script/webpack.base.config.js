const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index',
  output: {
    filename: 'index.[hash:8].js',
    path: path.resolve(__dirname, '../dist'),
    chunkFilename: "[id].chunk.js",
    publicPath: './'
  },
  target: 'web',
  // 配置如何展示性能提示
  performance: {
    hints: 'warning', // 提示类型
    // 定一个创建后超过 500kb 的资源，将展示一条警告
    maxAssetSize: 1024 * 500,
    maxEntrypointSize: 1024 * 500,
  },
  // 添加插件
  optimization: {
    // 打包后再拆包
    splitChunks: {
      // 这表示将选择哪些块进行优化。当提供一个字符串，有效值为 all, async 和 initial. 提供 all 可以特别强大，因为这意味着即使在异步和非异步块之间也可以共享块。
      chunks: 'all',
      // 要生产的块最小大小（以字节为单位）
      minSize: 30000,
      maxSize: 0,
      // 分割前必须共享模块的最小块数
      minChunks: 1,
      // 按需加载时的最大并行请求数
      maxAsyncRequests: 5,
      // 入口点处的最大并行请求数
      maxInitialRequests: 3,
      // 指定用于生成的名称的分割符 vendors~main.js
      // automaticNameDelimiter: '~',
      // 拆分块的名称
      name: true,
      cacheGroups: {
        styles: {
          name: 'static/css/chunk-styles',
          test: /\.(css|scss|sass)$/,
          chunks: 'all',
          enforce: true,
        },
        commons: {
          name: 'static/js/chunk-commons',
          test: path.join(__dirname, '..', 'src/components'),
          minChunks: 3,
          priority: 5,
          reuseExistingChunk: true,
        },
        react: {
          test: /[\\/]node_modules[\\/](react)[\\/]/,
          name: 'static/js/chunk-react',
          priority: 20,
        },
        reactDom: {
          test: /[\\/]node_modules[\\/](react-dom)[\\/]/,
          name: 'static/js/chunk-react-dom',
          priority: 20,
        },
        vendors: {
          name: 'static/js/chunk-libs',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  // 模块
  module: {
    rules: [
      // babel编译 .babelrc配置
      {
        test: /.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      // css 加载
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      // 使用typescript
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
    ]
  },
  // 解析模块请求的选项
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, '..', 'src')
    ],
    // 自动解析确定的扩展
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, '..', 'src'),
    }
  },
  plugins: [
    // 清除包
    new CleanWebpackPlugin(),
    // html模版
    new HtmlWebpackPlugin({
      title: 'TGU Blog',
      filename: 'index.html',
      template: './public/index.html',
      // 压缩html文件
      hash: true,
      // 压缩 => production 模式使用
      minify: {
        // 删除双引号
        removeAttributeQuotes: true,
        // 折叠 html 为一行
        collapseWhitespace: true,
      },
    }),
  ]
}