import Vue from 'vue';
import SetariaUI from 'setaria-ui';
import locale from 'setaria-ui/lib/locale/lang/zh-CN';
import 'font-awesome/css/font-awesome.css';
import { isEmpty } from '@/model/util';
import '../style/default.scss';
import Chart from './chart';
import Description from './description';
import DescriptionList from './description-list';
import FooterToolbar from './footer-toolbar';
import PageHeader from './page-header';
import GridContent from './grid-content';
import Result from './result';
import Trend from './trend';

const customComponents = {
  ...Chart,
  Description,
  DescriptionList,
  FooterToolbar,
  PageHeader,
  GridContent,
  Result,
  Trend,
};

/**
 * 引入项目所用组件
 * @param {Vue} VueInstance
 */
function install(VueInstance) {
  /* istanbul ignore if */
  if (install.installed) return;
  // 使用中文语言加载Setaria UI
  SetariaUI.install(VueInstance, locale);
  // 批量加载Setaria-UI组件
  Object.keys(SetariaUI).forEach((key) => {
    const component = SetariaUI[key];
    if (!isEmpty(component.name) && component.name.indexOf('El') === 0) {
      // 加载组件
      // VueInstance.component(component.name, component);
    }
  });
  // 加载自定义组件
  Object.keys(customComponents).forEach((key) => {
    const component = customComponents[key];
    // 加载组件
    VueInstance.component(component.name, component);
  });
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

// 加载UI组件
Vue.use(install);

const UI = Object.assign({}, SetariaUI, {
  install,
});
export default UI;
