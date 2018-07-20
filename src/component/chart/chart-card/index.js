import ChartCard from './src/chart-card.vue';

/* istanbul ignore next */
ChartCard.install = (Vue) => {
  Vue.component(ChartCard.name, ChartCard);
};

export default ChartCard;
