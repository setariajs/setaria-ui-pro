<template>
  <div
    class="el-description-list"
    :class="[size, layout]">
    <div class="title" v-if="$slots.title || title">
      <slot name="title">
        {{ title }}
      </slot>
    </div>
    <el-row :gutter="gutter" v-if="$slots.default">
      <slot></slot>
    </el-row>
  </div>
</template>
<style lang="scss">
.el-description-list {
  &.small {
    .el-description {
      .term,
      .detail {
        padding-bottom: 8px;
      }
    }
  }

  &.vertical {
    .term {
      padding-bottom: 8px;
      display: block;
    }

    .detail {
      display: block;
    }
  }
}
</style>
<style lang="scss" scoped>
@import "@/style/variables.scss";

.el-description-list {
  .title {
    font-size: 14px;
    color: $--heading-color;
    font-weight: 500;
    margin-bottom: 16px;
  }

  &.large {
    .title {
      font-size: 16px;
    }
  }

  &.small {
    .title {
      margin-bottom: 12px;
      color: $--heading-color;
    }

    .el-description {
      .term,
      .detail {
        padding-bottom: 8px;
      }
    }
  }
}
</style>
<script>
export default {
  name: 'ElDescriptionList',
  provide() {
    return {
      elDescriptionList: this,
    };
  },
  props: {
    layout: {
      type: String,
      default: 'horizontal',
      validator: value => ['horizontal', 'vertical'].indexOf(value) > -1,
    },
    col: {
      default: 3,
      validator: value => value > 0 && value <= 4,
    },
    gutter: {
      default: 32,
    },
    title: String,
    size: String,
  },
};
</script>
