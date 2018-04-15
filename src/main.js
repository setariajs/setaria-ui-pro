// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { router, store } from 'setaria';
import '@/component';
import '@/model/store';
import './style/default.css';
import App from './App';

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
