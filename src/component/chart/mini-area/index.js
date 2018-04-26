import MiniArea from './src/mini-area';

/* istanbul ignore next */
MiniArea.install = (Vue) => {
  Vue.component(MiniArea.name, MiniArea);
};

export default MiniArea;
