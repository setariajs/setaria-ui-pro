<template>
  <div class="el-avatar-list">
    <ul>
      <slot></slot>
    </ul>
  </div>
</template>
<style lang="scss">
.el-avatar-list {
  display: inline-block;
  ul {
    display: inline-block;
    margin-left: 8px;
    font-size: 0;
  }
}
</style>
<script>
export default {
  name: 'ElAvatarList',
  props: {
    size: {
      type: String,
      default: '',
      validator(value) {
        return ['medium', 'small', ''].indexOf(value) !== -1;
      },
    },
  },
  provide() {
    return {
      elAvatarList: this,
    };
  },
};
</script>
