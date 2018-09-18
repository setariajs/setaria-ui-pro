import FooterToolbar from './src/footer-toolbar.vue';

/* istanbul ignore next */
FooterToolbar.install = (Vue) => {
  Vue.component(FooterToolbar.name, FooterToolbar);
};

export default FooterToolbar;
