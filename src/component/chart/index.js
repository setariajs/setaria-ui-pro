import Vue from 'vue';
import ECharts from 'vue-echarts';
import Bar from './bar';
import ChartCard from './chart-card';
import MiniArea from './mini-area';
import MiniBar from './mini-bar';

Vue.component('chart', ECharts);

export default {
  Bar,
  ChartCard,
  MiniArea,
  MiniBar,
};
