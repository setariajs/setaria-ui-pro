<template>
  <div class="el-mini-area"  :style="{
    height: `${height}px`
  }">
    <chart :options="options" ref="chart" style="width: 100%; height: 100%;"></chart>
  </div>
</template>
<script>
import { addResizeListener, removeResizeListener } from '../../../resize-event';

export default {
  name: 'ElMiniArea',
  props: {
    color: {
      type: String,
      default: 'rgba(24, 144, 255, 0.2)',
    },
    borderColor: {
      type: String,
      default: '#1089ff',
    },
    borderWidth: {
      type: Number,
      default: 0,
    },
    height: Number,
    data: {
      type: Array,
      required: true,
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
        borderColor,
        borderWidth,
        color,
        data,
        formatter,
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
            type: 'line',
            data: data.map(item => item.y),
            areaStyle: {
              color,
            },
            itemStyle: {
              color: borderColor,
            },
            lineStyle: {
              color: borderColor,
              width: borderWidth,
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
            smooth: true,
          },
        ],
      };
    },
  },
  mounted() {
    addResizeListener(this.$el, this.$refs.chart.resize);
  },
  beforeDestroy() {
    if (this.$el && this.$refs.chart.resize) {
      removeResizeListener(this.$el, this.$refs.chart.resize);
    }
  },
};
</script>
