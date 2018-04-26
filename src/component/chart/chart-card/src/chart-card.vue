<template>
  <el-card shadow="never" :body-style="{
      'border': '1px solid #e8e8e8'
    }">
    <div class="el-chart-card">
      <div class="el-chart-card__header">
        <div class="el-chart-card__avatar" v-if="$slots.avatar">
          <slot name="avatar"></slot>
        </div>
        <div class="el-chart-card__meta-wrap">
          <div class="el-chart-card__meta">
            <span v-if="title || $slots.title">
              <slot name="title" v-if="$slots.title"></slot>
              <template v-else>{{ title }}</template>
            </span>
            <span class="el-chart-card__action">
              <slot name="action"></slot>
            </span>
          </div>
          <div class="el-chart-card__total" v-if="total || $slots.total">
            <slot name="total" v-if="$slots.total"></slot>
            <template v-else>{{ total }}</template>
          </div>
        </div>
      </div>
      <div class="el-chart-card__body" :style="contentStyle" v-if="$slots.default">
        <slot v-if="typeof contentHeight !== 'number'"></slot>
        <div class="fixed" v-else>
          <slot></slot>
        </div>
      </div>
      <div class="el-chart-card__footer" v-if="$slots.footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </el-card>
</template>
<style lang="scss">
  .el-chart-card {
    position: relative;
    font-size: 14px;

    .el-chart-card__header {
      position: relative;
      overflow: hidden;
      width: 100%;

      .el-chart-card__avatar {
        position: relative;
        top: 4px;
        float: left;
        margin-right: 20px;

        img {
          border-radius: 100%;
        }
      }

      .el-chart-card__meta-wrap {
        float: left;

        .el-chart-card__meta {
          color: rgba(0,0,0,.45);
          font-size: 14px;
          line-height: 22px;
          height: 22px;

          .el-chart-card__action {
            cursor: pointer;
            position: absolute;
            top: 0;
            right: 0;
          }
        }

        .el-chart-card__total {
          overflow: hidden;
          text-overflow: ellipsis;
          word-break: break-all;
          white-space: nowrap;
          color: rgba(0,0,0,.85);
          margin-top: 4px;
          margin-bottom: 0;
          font-size: 30px;
          line-height: 38px;
          height: 38px;
        }
      }
    }

    .el-chart-card__body {
      margin-bottom: 12px;
      position: relative;
      width: 100%;

      .fixed {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
      }
    }

    .el-chart-card__footer {
      border-top: 1px solid #e8e8e8;
      padding-top: 9px;
      margin-top: 8px;
      font-size: 14px;
    }
  }
</style>
<script>
export default {
  name: 'ElChartCard',
  props: {
    title: String,
    total: String,
    contentHeight: Number,
  },
  computed: {
    contentStyle() {
      const ret = {};
      if (typeof this.contentHeight === 'number') {
        ret.height = `${this.contentHeight}px`;
      }
      return ret;
    },
  },
};
</script>
