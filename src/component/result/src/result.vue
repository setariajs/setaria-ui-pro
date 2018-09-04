<template>
  <div class="el-result">
    <div class="icon">
      <i :class="{
        'el-icon-success': type === 'success',
        'el-icon-error': type === 'error'
      }"/>
    </div>
    <div class="title" v-if="title || $slots.title">
      <slot name="title">
        <span>{{ title }}</span>
      </slot>
    </div>
    <div class="description" v-if="description || $slots.description">
      <slot name="description">
        <span>{{ description }}</span>
      </slot>
    </div>
    <div class="extra" v-if="extra || $slots.extra">
      <slot name="extra">
        <span>{{ extra }}</span>
      </slot>
    </div>
    <div class="actions" v-if="$slots.actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.el-result {
  text-align: center;

  .icon {
    margin-bottom: 24px;

    i {
      font-size: 72px;
    }

    .el-icon-success {
      color: #52c41a;
    }

    .el-icon-error {
      color: #f5222d;
    }
  }

  .title {
    color: rgba(0, 0, 0, 0.85);
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    margin-bottom: 16px;
  }

  .description {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
    margin-bottom: 24px;
  }

  .extra {
    background: #fafafa;
    padding: 24px 40px;
    border-radius: 2px;
    text-align: left;
  }

  .actions {
    margin-top: 32px;
  }
}
</style>
<script>
export default {
  name: 'ElResult',
  props: {
    title: String,
    description: String,
    type: {
      type: String,
      default: 'success',
    },
    extra: String,
  },
};
</script>
