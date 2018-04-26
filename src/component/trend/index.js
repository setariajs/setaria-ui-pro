import Trend from './src/trend';

/* istanbul ignore next */
Trend.install = (Vue) => {
  Vue.component(Trend.name, Trend);
};

export default Trend;
