import PageHeader from './src/page-header.vue';

/* istanbul ignore next */
PageHeader.install = (Vue) => {
  Vue.component(PageHeader.name, PageHeader);
};

export default PageHeader;
