const { spawn } = require('child_process');
const CONSTANTCODE = require('./constant');
const chalk = require('chalk');

const log = console.log;

log(chalk.blue('\n🚀 starting server...\n'));

const feCodeWatchProcess = spawn('npm', ['run', 'wds:watch'], {
  stdio: 'inherit',
  shell: process.platform === 'win32',
});

const svrCodeWatchProcess = spawn('npm', ['run', 'svr:watch'], {
  shell: process.platform === 'win32',
});

let nodeServerProcess = null;

const startNodeServer = () => {
  nodeServerProcess && nodeServerProcess.kill();
  nodeServerProcess = spawn('node', ['scripts/svr-dev-server.js']);
  nodeServerProcess.stdout.on('data', print);
};

const print = (data) => {
  let str = data.toString();
  if (str.indexOf('服务端代码编译完成') > -1) {
    //接收到服务端代码编译完成的通知
    startNodeServer(); //重启 node 服务
  } else if (str.indexOf('[at-loader]') > -1) {
    log(chalk.yellowBright(str));
  } else {
    log(str);
  }
};

//监听服务端代码构建服务的对外输出  stdout 事件
svrCodeWatchProcess.stdout.on('data', print);

//杀掉子进程
const killChild = () => {
  svrCodeWatchProcess && svrCodeWatchProcess.kill();
  nodeServerProcess && nodeServerProcess.kill();
  feCodeWatchProcess && feCodeWatchProcess.kill();
};

//主进程关闭退出子进程
process.on('close', (code) => {
  console.log('main process  close', code);
  killChild();
});
//主进程关闭退出子进程
process.on('exit', (code) => {
  console.log('main process  exit', code);
  killChild();
});

//非正常退出情况
process.on('SIGINT', function () {
  svrCodeWatchProcess.stdin.write('exit', (error) => {
    console.log('svr code watcher process exit!');
  });
  killChild();
});
