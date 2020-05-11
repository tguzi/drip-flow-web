const path = require('path')
// const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const { BUILD_OUTPUT_DIR } = require('./config')

// dll地图
// const dllMap = require(`${BUILD_OUTPUT_DIR}/lib/manifest.json`)

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, '../dist'),
    chunkFilename: "[name].js",
    publicPath: './'
  },
  target: 'web',
  // 配置如何展示性能提示
  performance: {
    hints: 'warning', // 提示类型
    // 定一个创建后超过 200kb 的资源，将展示一条警告
    maxAssetSize: 1024 * 200,
    maxEntrypointSize: 1024 * 200,
  },
  // 添加插件
  optimization: {
    minimizer: [
      // css压缩、去重
      new OptimizeCSSAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: [
            'default',
            {
              discardComments: {
                removeAll: true,
              },
              normalizeUnicode: false,
            },
          ],
        },
        canPrint: true,
      }),
      // 压缩js
      new TerserPlugin({
        terserOptions: {
          compress: {
            warnings: false,
            // console
            drop_console: true,
            drop_debugger: false,
            // 移除console
            pure_funcs: ['console.log'],
          },
        },
        sourceMap: false,
        parallel: true,
      }),
    ],
    // 打包后再拆包
    splitChunks: {
      // 这表示将选择哪些块进行优化。当提供一个字符串，有效值为 all, async 和 initial. 提供 all 可以特别强大，因为这意味着即使在异步和非异步块之间也可以共享块。
      chunks: 'all',
      // 要生产的块最小大小（以字节为单位）
      minSize: 10240,
      maxSize: 0,
      // 分割前必须共享模块的最小块数
      minChunks: 1,
      // 按需加载时的最大并行请求数
      maxAsyncRequests: 5,
      // 入口点处的最大并行请求数
      maxInitialRequests: 3,
      // 指定用于生成的名称的分割符 vendors~main.js
      automaticNameDelimiter: '~',
      // 拆分块的名称
      name: true,
      cacheGroups: {
        // 抽出css
        // styles: {
        //   name: 'static/css/styles',
        //   test: /\.(css|scss|sass)$/,
        //   chunks: 'all',
        //   enforce: true,
        // },
        // 抽出公共模块
        commons: {
          name: 'static/js/components',
          test: path.join(__dirname, '..', 'src/components'),
          minChunks: 3,
          priority: 5,
          reuseExistingChunk: true,
        },
        // 单独抽出react
        react: {
          test: /[\\/]node_modules[\\/](react)[\\/]/,
          name: 'static/js/react',
          priority: 20,
        },
        // 单独抽出react-dom
        reactDom: {
          test: /[\\/]node_modules[\\/](react-dom)[\\/]/,
          name: 'static/js/react-dom',
          priority: 20,
        },
        // 抽出第三方的包
        vendors: {
          name: 'static/js/vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: 15,
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
        use: ['style-loader', 'css-loader']
      },
      // 使用typescript
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      // html
      // {
      //   test: /\.(html)$/,
      //   use: {
      //     loader: 'html-loader',
      //     options: {
      //       attrs: ['img:src'],
      //     }
      //   }
      // },
      // 静态资源
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            limit: 1024,
            outputPath: 'images/',
            publicPath: '../dist/images',
            esModule: false
          }
        }]
      },
      // 加载图片
      {
        test: /\.(png|svg|jpg|jpeg|gif)/,
        // 匹配数组中任何一个符合条件。not 必须排除数组中的所有条件。and 必须匹配数组中的所有条件。
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'static/img/',
            },
          },
        ],
      },
      // 加载字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        // 设置依赖文件索引目录（匹配特定条件）
        include: [path.resolve(__dirname, '..', 'src')],
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'static/fonts/',
            },
          },
        ],
      },
      // 地址加载
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              limit: 1024,
              outputPath: 'images/',
              publicPath: '../dist/images',
              esModule: false
            }
          }
        ]
      }
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
    // 使用dll
    // new webpack.DllReferencePlugin({
    //   context: __dirname,
    //   scope: "tgu",
    //   sourceType: "commonjs2",
    // 	name: 'lib_dll',
    // 	manifest: dllMap
    // }),
    // 提取css
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[hash:8].css',
      chunkFilename: 'static/css/[id].[hash:8].css',
    }),
  ]
}