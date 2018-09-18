import DescriptionList from './src/description-list.vue';

/* istanbul ignore next */
DescriptionList.install = (Vue) => {
  Vue.component(DescriptionList.name, DescriptionList);
};

export default DescriptionList;
