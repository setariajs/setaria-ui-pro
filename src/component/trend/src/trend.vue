<template>
  <div class="el-trend">
    <span class="el-trend__text">
      <slot></slot>
    </span>
    <span>
      <i :class="[
        colorful ? `${flag}` : '',
        flag === 'up' ? 'el-icon-caret-top' : '',
        flag === 'down' ? 'el-icon-caret-bottom' : '',
      ]"></i>
    </span>
  </div>
</template>
<style lang="scss">
  .el-trend {
    display: inline-block;
    font-size: 14px;
    line-height: 22px;

    .el-trend__text {
      margin-left: 8px;
      color: rgba(0, 0, 0, 0.85);
    }

    .up, .down {
      margin-left: 4px;
      position: relative;
      top: 1px;
    }

    .up {
      color: rgb(245, 34, 45);
    }

    .down {
      color: rgb(82, 196, 26);
    }
  }
</style>
<script>
export default {
  name: 'ElTrend',
  props: {
    colorful: {
      type: Boolean,
      default: true,
    },
    flag: {
      type: String,
      required: true,
    },
  },
};
</script>

