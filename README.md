## 项目结构

```bash
├── dist                        编译后项目文件
├── node_modules                依赖包
├── public                      静态资源文件
├── script                      构建文件
│   ├── analyzer.js               分析包大小    
│   ├── build.js                  打包    
│   ├── dll.js                    抽离公共的依赖    
│   ├── start.js                  开发环境启动    
│   ├── webpack.base.config.js    webpack基础配置    
├── src                         源码
│   ├── pages                     页面组件
│   ├── index.tsx                 入口文件
├── .babelrc                    babel 配置
├── .eslintrc.js                eslint 配置
├── .gitignore                  忽略提交到git目录文件
├── .prettierrc                 代码美化
├── package.json                依赖包及配置信息文件
├── tsconfig.json               typescript 配置
├── README.md                   描述文件
```
## git分支规范

* feat：新功能（feature）
* fix：修补bug
* docs：文档（documentation）
* style： 格式（不影响代码运行的变动）
* refactor：重构（即不是新增功能，也不是修改bug的代码变动）
* test：增加测试
* chore：构建过程或辅助工具的变动
