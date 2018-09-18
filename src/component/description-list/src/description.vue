<template>
  <el-col class="el-description" :lg="mdCol" :md="mdCol" :sm="smCol" :xs="24">
    <div class="term" v-if="$slots.term || term">
      <slot name="term">
        {{ term }}
      </slot>
    </div>
    <div class="detail" v-if="$slots.default">
      <slot></slot>
    </div>
  </el-col>
</template>
<style lang="scss" scoped>
@import "@/style/variables.scss";

.el-description {
  .term {
    // Line-height is 22px IE dom height will calculate error
    line-height: 20px;
    padding-bottom: 16px;
    margin-right: 8px;
    color: $--heading-color;
    white-space: nowrap;
    display: table-cell;

    &:after {
      content: ':';
      margin: 0 8px 0 2px;
      position: relative;
      top: -0.5px;
    }
  }

  .detail {
    line-height: 22px;
    width: 100%;
    padding-bottom: 16px;
    color: $--color-text-regular;
    display: table-cell;
  }
}
</style>
<script>
export default {
  name: 'ElDescription',
  inject: ['elDescriptionList'],
  props: {
    term: String,
  },
  computed: {
    mdCol() {
      return 24 / this.elDescriptionList.col;
    },
    smCol() {
      return 24 / (this.elDescriptionList.col < 2 ? this.elDescriptionList.col : 2);
    },
  },
  created() {
  },
};
</script>
