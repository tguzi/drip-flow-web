const webpack = require('webpack')
const config = require('../build/dev/server.config')
const chalk = require('chalk')

const log = console.log

const compiler = webpack(config)

log(chalk.cyan('🚀 Starting the development node server...\n'))


compiler.watch(
  {
    aggregateTimeout: 300,
    ignored: /node_modules/,
    poll: 2000,
  },
  (err, stats) => {
    if (err || stats.hasErrors()) {
      // log(chalk.red(err))
    }
    let json = stats.toJson('minimal')
    if (json.errors) {
      json.errors.forEach((item) => {
        // console.error(item);
        // log(item)
      })
    }
    if (json.warnings) {
      json.warnings.forEach((item) => {
        // console.warn(item)
      })
    }
  }
)

compiler.hooks.done.tap('done', function (data) {
  log(chalk.green('\n 🎉服务端代码编译完成\n'))
})

process.stdin.on('data', function (data) {
  if (data.toString() === 'exit') {
    process.exit()
  }
})
