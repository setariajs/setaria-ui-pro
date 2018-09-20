# Setaria-UI-Pro

> Setaria UI Pro - 开箱即用的中台前端应用解决方案

## 开发所需软件

1. Git
> 版本管理工具。用于下载项目的代码和在开发时进行代码和文档的版本管理。

  [安装说明](https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%AE%89%E8%A3%85-Git)

2. NodeJS
> 前端项目运行的基础环境。

  [安装包下载地址](https://nodejs.org/zh-cn/download/)
  [安装说明](http://www.runoob.com/nodejs/nodejs-install-setup.html)

``` bash
1.使用国内镜像
npm config set registry https://registry.npm.taobao.org
// 配置后可通过下面方式来验证是否成功
npm config get registry
```

3. Yarn
> 用于管理第三方依赖

  [安装包下载地址](https://yarnpkg.com/lang/zh-hans/docs/install/)

## 安装步骤

``` bash
# 下载工程到本地
git clone https://github.com/bluejfox/setaria-ui-pro.git
# 进入工程目录
cd setaria-ui-pro
# 安装项目依赖
yarn
```

## 本地开发

``` bash
# 在vue.config.js中修改proxy
例:
proxy: {
  '/api/': {
    // 远程服务地址
    target: 'http://localhost:8081',
  },
},

# 启动服务器
yarn serve
```

## 部署生产

通过命令行工具进入setaria-ui-pro目录，执行 `yarn build`。

``` bash
# 执行打包操作
yarn build
# 构建后的文件生成在 `dist` 目录
```

## 开发手册

ToDo

## 完成度

**Dashboard**

- [ ] 分析页
- [ ] 监控页
- [ ] 工作台

**表单页**

- [x] 基础表单
- [x] 分步表单
- [x] 高级表单

**列表页**

- [x] 查询表格
- [x] 标准列表
- [ ] 卡片列表
- [ ] 搜索列表（文章）
- [ ] 搜索列表（项目）
- [ ] 搜索列表（应用）

**详情页**

- [x] 基础详情页
- [x] 高级详情页

**结果页**

- [x] 成功页
- [x] 失败页

**异常页**

- [ ] 403
- [ ] 404
- [ ] 500

**个人页**

- [ ] 个人中心
- [ ] 个人设置

## 浏览器支持

支持各种主流浏览器(Chrome, Firefox, Safari)和Internet Explorer 9+.

## 主要依赖包列表

* [vue](https://vuejs.org/) - A progressive, incrementally-adoptable JavaScript framework for building UI on the web.
* [setaria](https://github.com/bluejfox/setaria) - An Front-End Single Page Application Framework base on Vue.
* [setaria-ui](https://github.com/bluejfox/setaria-ui) - A Vue.js 2.0 UI Toolkit for Web.
* [axios](https://github.com/mzabriskie/axios) - Promise based HTTP client for the browser and node.js.
* [echarts](http://echarts.baidu.com/) -a powerful, interactive charting and visualization library for browser.

## 开发前需要掌握的知识

* [ES6](http://es6.ruanyifeng.com/)

## License

MIT
