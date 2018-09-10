// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Setaria from 'setaria';
import config from './config/index';
import UI from './component/index';
import updateBrowserTitle from './model/guard/updateBrowserTitle';
import App from './App.vue';
import mockConfig from '../mock/index';
import { delay, init } from '../mock/adapter';

const setaria = new Setaria(config);
// Setaria初始化
Vue.use(Setaria);
// 安装全局组件
Vue.use(UI);
// 设置路由守卫
const router = Setaria.getRouter();
router.beforeResolve(updateBrowserTitle);
// mock
init(delay(mockConfig, 500));

new Vue({
  setaria,
  render: h => h(App),
}).$mount('#app');
