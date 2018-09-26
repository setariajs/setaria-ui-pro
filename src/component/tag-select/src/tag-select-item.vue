<template>
  <span class="el-tag-select-item">
    <el-checkbox-button :label="label">
      <slot></slot>
    </el-checkbox-button>
  </span>
</template>
<script>
import emitter from 'setaria-ui/src/mixins/emitter';

export default {
  name: 'ElTagSelectItem',
  mixins: [emitter],
  props: {
    label: null,
  },
  beforeMount() {
    this.dispatch('ElTagSelect', 'el.tag.select.addTagSelectItem', [this]);
  },
};
</script>
