<template>
  <li class="el-avatar-item" :class="{
    'el-avatar-item--medium': size === 'medium',
    'el-avatar-item--small': size === 'small',
  }">
    <el-tooltip v-if="tip" :content="tip" placement="top">
      <el-avatar :src="src" :size="size"></el-avatar>
    </el-tooltip>
    <el-avatar :src="src" :size="size" v-else></el-avatar>
  </li>
</template>
<style lang="scss">
@import "@/style/variables.scss";

.el-avatar-item {
  display: inline-block;
  font-size: $--font-size-base;
  margin-left: -8px;
  width: $--avatar-size-base;
  height: $--avatar-size-base;

  &.el-avatar-item--medium {
    width: $--avatar-size-md;
    height: $--avatar-size-md;
  }

  &.el-avatar-item--small {
    width: $--avatar-size-sm;
    height: $--avatar-size-sm;
  }

  .el-avatar {
    border: 1px solid #fff;
  }
}
</style>
<script>
export default {
  name: 'ElAvatarItem',
  inject: ['elAvatarList'],
  props: {
    src: {
      required: true,
      type: String,
    },
    tip: String,
  },
  computed: {
    size() {
      return this.elAvatarList.size;
    },
  },
};
</script>
