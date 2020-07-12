const path = require('path')
const os = require('os')
// const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HappyPack = require('happypack')
// const { BUILD_OUTPUT_DIR } = require('./config')

// 手动创建进程池
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })

// dll地图
// const dllMap = require(`${BUILD_OUTPUT_DIR}/lib/manifest.json`)
// const isDev = process.env.NODE_ENV === 'developmet'

module.exports = {
  entry: [path.resolve(__dirname, '../src/index.tsx')].filter(Boolean),
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
    maxAssetSize: 1024 * 300,
    maxEntrypointSize: 1024 * 500,
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
      minSize: 1024 * 10,
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
        // 抽离codemirror
        codemirror: {
          test: /[\\/]node_modules[\\/](codemirror)[\\/]/,
          name: 'static/js/codemirror',
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
      // babel编译 .babelrc配置 & eslint
      {
        test: /.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: ['happypack/loader?id=happyBabel'],
      },
      // eslint
      {
        test: /\.(ts|tsx)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              formatter: require.resolve('react-dev-utils/eslintFormatter'),
              eslintPath: require.resolve('eslint'),
              resolvePluginsRelativeTo: __dirname,
              showEslintErrorsInOverlay: true,
            },
            loader: require.resolve('eslint-loader'),
          },
        ],
        include: path.resolve(__dirname, '../src'),
      },
      // css 加载
      {
        test: /\.css|.scss$/,
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
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: [require('autoprefixer')],
            }
          }
        ]
      },
      // 使用typescript
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      // 加载字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        // 设置依赖文件索引目录（匹配特定条件
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
      // 静态资源
      {
        test: /\.(png|jpg|jpeg|gif|svg|svgz)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 20k以下的图片打包成base64，减少资源请求
              name: '[name].[ext]',
              limit: 1024 * 20,
            }
          }
        ]
      },
      // markdown编辑器
      {
        test: /\.md$/,
        use: 'raw-loader'
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
      'src': path.resolve(__dirname, '../src'),
      'components': path.resolve(__dirname, '../src/components'),
      'config': path.resolve(__dirname, '../src/config'),
      'fetch': path.resolve(__dirname, '../src/fetch'),
      'hooks': path.resolve(__dirname, '../src/hooks'),
      'pages': path.resolve(__dirname, '../src/pages'),
      'modules': path.resolve(__dirname, '../src/modules'),
      'static': path.resolve(__dirname, '../src/static'),
      'imgs': path.resolve(__dirname, '../src/static/imgs'),
      'layout': path.resolve(__dirname, '../src/layout'),
      'utils': path.resolve(__dirname, '../src/utils'),
    }
  },
  plugins: [
    // 清除包
    new CleanWebpackPlugin(),
    // html模版
    new HtmlWebpackPlugin({
      title: '滴流谷',
      filename: 'index.html',
      template: './public/index.html',
      favicon: './public/favicon.ico',
      // 压缩html文件
      hash: true,
      // 压缩 => production 模式使用
      minify: {
        // 删除双引号
        removeAttributeQuotes: true,
        // 折叠 html 为一行
        collapseWhitespace: true,
      },
      templateParameters: {
        assets: {
          css: ['./public/reset.css'],
        }
      }
    }),
    // 使用dll - 因为和splitChunks不太兼容，所以直接弃用了
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
    new HappyPack({
      id: 'happyBabel',
      threadPool: happyThreadPool,
      loaders: ['babel-loader?cacheDirectory']
    })
  ]
}