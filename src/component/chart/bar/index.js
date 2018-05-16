import Bar from './src/bar';

/* istanbul ignore next */
Bar.install = (Vue) => {
  Vue.component(Bar.name, Bar);
};

export default Bar;
