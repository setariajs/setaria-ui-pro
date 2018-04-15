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
  '/ume-ems/rest/s01/': {
    // 远程服务地址
    target: 'http://localhost:8081',
  },
},

# 启动服务器
yarn serve
```

## 部署生产
通过命令行工具进入ume-emc目录，执行mvn clean package。

``` bash
1. 执行 `yarn run build` 进行打包
2. 取得构建后的文件
  构建好的文件生成在 ./target/dist目录中
```

## 开发手册
[开发手册](https://github.com/ume-team/ume-emc/blob/master/doc/GUIDE.md)

## 浏览器支持
支持各种主流浏览器(Chrome, Firefox, Safari)和Internet Explorer 9+.

## 依赖包列表
* [vue](https://github.com/vuejs/vue)
* [axios](https://github.com/mzabriskie/axios)
* [element-ui](https://github.com/ElemeFE/element) - A Vue.js 2.0 UI Toolkit for Web.

## 开发前需要掌握的知识
* [ES6](http://es6.ruanyifeng.com/)

## License
MIT
