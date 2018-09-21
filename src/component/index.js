import Vue from 'vue';
import SetariaUI from 'setaria-ui';
import locale from 'setaria-ui/lib/locale/lang/zh-CN';
import 'font-awesome/css/font-awesome.css';
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
  // 注册自定义组件
  Object.keys(customComponents).forEach((key) => {
    const component = customComponents[key];
    // 注册组件
    VueInstance.component(component.name, component);
  });
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

// 加载UI组件
Vue.use(install);
// 使用中文语言加载Setaria UI
Vue.use(SetariaUI, locale);

const UI = Object.assign({}, SetariaUI, {
  install,
});
export default UI;
