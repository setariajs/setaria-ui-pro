module.exports = {
  baseUrl: '/setaria-ui-pro',
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    // 前端开发服务器端口号
    port: 7001,
    // 远程服务代理设置
    proxy: {
      '/ume-ems/rest/s01/': {
        // 远程服务地址
        target: 'http://localhost:8081',
      },
    },
  },
};
