module.exports = {
  baseUrl: '/setaria-ui-pro',
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    // 前端开发服务器端口号
    port: 7001,
    // 远程服务代理设置
    proxy: {
      '/api': {
        // 远程服务地址
        target: 'http://47.94.254.158:5000',
      },
    },
  },
};
