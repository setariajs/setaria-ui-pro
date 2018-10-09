<template>
  <div
    class="el-footer-toolbar"
    :style="{
      'width': width
    }">
    <div class="left" v-if="$slots.extra">
      <slot name="extra"/>
    </div>
    <div class="right" v-if="$slots.children">
      <slot name="children"/>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.el-footer-toolbar {
  position: fixed;
  width: 100%;
  bottom: 0;
  right: 0;
  height: 56px;
  line-height: 56px;
  box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.03);
  background: #fff;
  border-top: 1px solid #e8e8e8;
  padding: 0 24px;
  z-index: 9;

  &:after {
    content: '';
    display: block;
    clear: both;
  }

  .left {
    float: left;
  }

  .right {
    float: right;
  }

  button + button {
    margin-left: 8px;
  }
}
</style>
<script>
import { addResizeListener, removeResizeListener } from '../../resize-event';

export default {
  name: 'ElFooterToolbar',
  data() {
    return {
      width: '',
    };
  },
  mounted() {
    addResizeListener(this.$el, this.resizeFooterToolbar);
  },
  methods: {
    resizeFooterToolbar() {
      const aside = document.querySelector('.el-aside');
      const paddingWidth = `${24 * 2}px`;
      this.width = `calc(100% - ${aside.style.width} - ${paddingWidth})`;
    },
  },
  beforeDestroy() {
    if (this.$el && this.resizeFooterToolbar) {
      removeResizeListener(this.$el, this.resizeFooterToolbar);
    }
  },
};
</script>
