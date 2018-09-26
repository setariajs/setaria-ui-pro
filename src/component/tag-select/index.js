import TagSelect from './src/tag-select.vue';

/* istanbul ignore next */
TagSelect.install = (Vue) => {
  Vue.component(TagSelect.name, TagSelect);
};

export default TagSelect;
