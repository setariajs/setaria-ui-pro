import MiniBar from './src/mini-bar';

/* istanbul ignore next */
MiniBar.install = (Vue) => {
  Vue.component(MiniBar.name, MiniBar);
};

export default MiniBar;
