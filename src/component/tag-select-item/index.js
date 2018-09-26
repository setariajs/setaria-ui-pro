import TagSelectItem from '../tag-select/src/tag-select-item.vue';

/* istanbul ignore next */
TagSelectItem.install = (Vue) => {
  Vue.component(TagSelectItem.name, TagSelectItem);
};

export default TagSelectItem;
