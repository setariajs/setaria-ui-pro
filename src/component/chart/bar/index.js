import Bar from './src/bar.vue';

/* istanbul ignore next */
Bar.install = (Vue) => {
  Vue.component(Bar.name, Bar);
};

export default Bar;
