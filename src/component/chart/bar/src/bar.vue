<template>
  <div class="el-bar"  :style="{
    height: `${height}px`
  }">
    <chart :options="options" ref="chart" style="width: 100%; height: 100%;"></chart>
  </div>
</template>
<script>
import debounce from 'throttle-debounce/debounce';
import { addResizeListener, removeResizeListener } from '../../../resize-event';

export default {
  name: 'ElBar',
  props: {
    title: String,
    color: {
      type: String,
      default: '#1890FF',
    },
    height: Number,
    data: {
      type: Array,
      required: true,
    },
    barMaxWidth: {
      type: String,
      default: '60%',
    },
    formatter: Function,
  },
  computed: {
    options() {
      const {
        barMaxWidth,
        color,
        data,
        formatter,
        title,
      } = this;
      return {
        title: {
          text: title,
          textStyle: {
            fontSize: 14,
          },
        },
        grid: {
          x: 50,
          y: 50,
          x2: 10,
          y2: 30,
        },
        xAxis: {
          type: 'category',
          data: data.map(item => item.x),
          axisTick: {
            alignWithLabel: true,
          },
        },
        yAxis: {
          type: 'value',
        },
        tooltip: {
          show: true,
        },
        series: [
          {
            type: 'bar',
            barMaxWidth,
            data: data.map(item => item.y),
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
  created() {
    this.debounceResize = debounce(200, () => this.$refs.chart.resize());
  },
  mounted() {
    addResizeListener(this.$el, this.debounceResize);
  },
  methods: {
  },
  beforeDestroy() {
    if (this.$el) {
      removeResizeListener(this.$el, this.debounceResize);
    }
  },
};
</script>
