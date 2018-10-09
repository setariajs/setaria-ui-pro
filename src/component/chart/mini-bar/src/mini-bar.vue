<template>
  <div class="el-mini-bar"  :style="{
    height: `${height}px`
  }">
    <chart :options="options" ref="chart" style="width: 100%; height: 100%;"></chart>
  </div>
</template>
<script>
import { addResizeListener, removeResizeListener } from '../../../resize-event';

export default {
  name: 'ElMiniBar',
  props: {
    color: {
      type: String,
      default: '#1890FF',
    },
    height: Number,
    data: {
      type: Array,
      required: true,
    },
    maxWidth: {
      type: Number,
      default: 30,
    },
    formatter: Function,
  },
  data() {
    return {
    };
  },
  computed: {
    options() {
      const {
        color,
        data,
        formatter,
        maxWidth,
      } = this;
      return {
        grid: {
          x: 2,
          y: 2,
          x2: 2,
          y2: 2,
        },
        xAxis: [
          {
            type: 'category',
            axisLine: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            show: false,
            type: 'value',
          },
        ],
        tooltip: {
          show: true,
        },
        series: [
          {
            type: 'bar',
            data: data.map(item => item.y),
            barMaxWidth: maxWidth,
            itemStyle: {
              color,
            },
            tooltip: {
              show: true,
              formatter(params) {
                if (formatter && typeof formatter === 'function') {
                  return formatter(params);
                }
                const index = params.dataIndex;
                return `${data[index].x}: ${data[index].y}`;
              },
            },
          },
        ],
      };
    },
  },
  mounted() {
    addResizeListener(this.$el, this.$refs.chart.resize);
  },
  methods: {
  },
  beforeDestroy() {
    if (this.$el && this.$refs.chart.resize) {
      removeResizeListener(this.$el, this.$refs.chart.resize);
    }
  },
};
</script>
