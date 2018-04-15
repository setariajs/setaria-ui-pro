# ume-emc

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
git clone https://github.com/ume-team/ume-emc.git
# 进入工程目录
cd ume-emc/src/main/webclient-source
# 安装项目依赖
yarn
```

## 本地开发
``` bash
# 在./config/dev.env.js中修改TARGET_WEBSERVICE_SERVER为自己所使用的后端服务地址
例:
修改
# TARGET_WEBSERVICE_SERVER: '"http://example.com/"'
为
TARGET_WEBSERVICE_SERVER: '"http://www.myservice.com/api"'

# 启动服务器
yarn run dev
```

## 部署生产
通过命令行工具进入ume-emc目录，执行mvn clean package。

``` bash
1. 定义Context-Path
  # Context-Path默认为ume-emc
  希望修改的场合，可修改ume-emc/pom.xml中的web.context.path
2. 构建
  构建分为yarn和maven两种方式。
  2.1. Yarn
    # 通过命令行工具进入ume-emc/src/main/webclient-source目录
    a) 执行 `yarn` 安装第三方依赖
    b) 执行 `yarn run build` 进行打包
    # 如果出现"BUILD SUCCESS"字样则代表构建成功
  2.2. Maven
    # 通过命令行工具进入ume-emc/目录
    执行 `mvn clean package`
    # 如果出现"BUILD SUCCESS"字样则代表构建成功
3. 取得构建后的文件
  构建好的文件生成在 ume-emc/target/dist目录中
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

## ToDo

### 公共模块
- [X] 鉴权
- [X] 消息处理
- [X] UME服务调用
- [X] 用户状态管理
- [X] 菜单控件作成
- [X] 元数据列表控件作成
- [X] 元数据表单控件作成

### 业务画面
- [ ] 元数据查询画面(包含元数据删除功能)
- [X] 元数据新增画面
- [X] 元数据修改画面

## License
MIT
