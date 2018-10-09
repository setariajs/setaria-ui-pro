import Ellipsis from './src/ellipsis.vue';

/* istanbul ignore next */
Ellipsis.install = (Vue) => {
  Vue.component(Ellipsis.name, Ellipsis);
};

export default Ellipsis;
