import Vue from 'vue';
import SetariaUI from 'setaria-ui';
import locale from 'setaria-ui/lib/locale/lang/zh-CN';
import 'font-awesome/css/font-awesome.css';
import '@/style/app.scss';
import Chart from './chart';
import Description from './description';
import DescriptionList from './description-list';
import FooterToolbar from './footer-toolbar';
import PageHeader from './page-header';
import GridContent from './grid-content';
import Result from './result';
import TagSelect from './tag-select';
import TagSelectItem from './tag-select-item';
import Trend from './trend';

// 使用中文语言加载Setaria UI
Vue.use(SetariaUI, locale);

const customComponents = {
  ...Chart,
  Description,
  DescriptionList,
  FooterToolbar,
  PageHeader,
  GridContent,
  Result,
  TagSelect,
  TagSelectItem,
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

const UI = Object.assign({}, SetariaUI, {
  install,
});
export default UI;
