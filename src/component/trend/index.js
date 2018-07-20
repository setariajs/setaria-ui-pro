import Trend from './src/trend.vue';

/* istanbul ignore next */
Trend.install = (Vue) => {
  Vue.component(Trend.name, Trend);
};

export default Trend;
