import Description from '../description-list/src/description.vue';

/* istanbul ignore next */
Description.install = (Vue) => {
  Vue.component(Description.name, Description);
};

export default Description;
