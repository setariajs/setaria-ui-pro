<template>
  <div
    class="el-tag-select"
    :class="{
      'has-expand': expandable,
      'expanded': expand,
    }">
    <el-checkbox-group
      v-model="model"
      class="select-item-group"
      @change="handleChange">
      <el-tag-select-item
        :label="selectAllLabel"
        @click.native="handleSelectAll">
        全部
      </el-tag-select-item>
      <slot></slot>
    </el-checkbox-group>
    <a class="trigger" v-if="expandable" @click="handleExpand">
      {{ expand ? '收起' : '展开' }}
      <i :class="{ 'el-icon-arrow-down': !expand, 'el-icon-arrow-up': expand }"></i>
    </a>
  </div>
</template>
<style lang="scss">
@import '@/style/variables.scss';

$-checkbox-group-split-width: 24px;

.el-tag-select {
  overflow: hidden;
  max-height: 32px;
  line-height: 32px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  display: block;

  &.has-expand {
    padding-right: 50px;
  }

  &.expanded {
    max-height: 200px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  .el-checkbox-group {
    display: inline-block;
    font-size: 14px;
    line-height: 32px;

    .el-tag-select-item {
      margin-right: $-checkbox-group-split-width;

      &:last-child {
        margin-right: 0;
      }

      .el-checkbox-button {

        .el-checkbox-button__inner {
          border: 0;
          border-radius: 4px;
          padding: 0 8px;
          font-size: 14px;
          height: 22px;
          line-height: 22px;
        }

        &:not(.is-checked) {
          .el-checkbox-button__inner {
            color: $--color-text-secondary;
          }
        }
      }
    }
  }

  .trigger {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
<script>
export default {
  name: 'ElTagSelect',
  componentName: 'ElTagSelect',
  props: {
    value: {},
    expandable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectAllLabel: 'all',
      model: [],
      selectAllModel: [],
      selectItemList: [],
      expand: false,
    };
  },
  watch: {
    value: {
      handler(val, oldVal) {
        if (val.length !== oldVal.length
          || (val.length === oldVal.length
            && val.every(valItem => oldVal.findIndex(item => item !== valItem)))) {
          this.model = [...val];
          this.refreshSelectAll(this.model);
        }
      },
    },
  },
  created() {
    this.$on('el.tag.select.addTagSelectItem', (selectItem) => {
      if (selectItem && selectItem.label !== this.selectAllLabel) {
        this.selectItemList.push(selectItem);
      }
    });
  },
  mounted() {
    // 解决全部TagSelectItem组件没有渲染结束后，无法正确设置全部按钮的状态问题
    this.model = [...this.value];
    this.refreshSelectAll(this.model);
  },
  methods: {
    handleSelectAll() {
      this.$nextTick(() => {
        // 选中【全部】的场合
        if (this.model.findIndex(item => item === this.selectAllLabel) !== -1) {
          this.selectAllItem(this.model);
        } else {
          this.removeItem(this.model);
        }
      });
    },
    handleChange(val) {
      this.refreshSelectAll(val);
    },
    refreshSelectAll(val) {
      if (this.isSelectAll(val)) {
        this.selectAllItem(val);
      } else {
        const index = val.findIndex(item => item === this.selectAllLabel);
        if (index !== -1) {
          this.removeItem(val, index);
        }
      }
    },
    handleExpand() {
      this.expand = !this.expand;
    },
    isSelectAll(val) {
      const arr = val.filter(item => item !== this.selectAllLabel);
      return arr.length === this.selectItemList.length;
    },
    selectAllItem(val) {
      this.selectItemList.forEach(({ label }) => {
        if (val.findIndex(item => item === label) === -1) {
          val.push(label);
        }
      });
      if (val.findIndex(item => item === this.selectAllLabel) === -1) {
        val.unshift(this.selectAllLabel);
      }
      this.triggerValueChange();
    },
    removeItem(val, index) {
      if (typeof index === 'number') {
        val.splice(index, 1);
      } else {
        val.splice(0, val.length);
      }
      this.triggerValueChange();
    },
    triggerValueChange() {
      const ret = this.model.filter(item => item !== this.selectAllLabel);
      this.$emit('input', ret);
    },
  },
};
</script>
