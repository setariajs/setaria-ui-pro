<template>
  <div
    class="el-tag-select"
    :class="{
      'has-expand': expandable,
      'expanded': expand,
    }">
    <el-checkbox-group v-model="selectAllModel" @change="handleSelectAllChange"
      class="select-all-group">
      <el-tag-select-item :label="selectAllLabel">
        全部
      </el-tag-select-item>
    </el-checkbox-group>
    <el-checkbox-group
      v-model="model"
      class="select-item-group"
      @change="handleChange">
      <slot></slot>
    </el-checkbox-group>
    <a class="trigger" v-if="expandable" @click="handleExpand">
      {{ expand ? '收起' : '展开' }}
      <i :class="{ 'el-icon-arrow-down': !expand, 'el-icon-arrow-up': expand }"></i>
    </a>
  </div>
</template>
<style lang="scss">
$-checkbox-group-split-width: 24px;

.el-tag-select {
  position: relative;
  overflow: hidden;
  max-height: 32px;
  line-height: 32px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  display: flex;

  .select-all-group {
    margin-right: $-checkbox-group-split-width;
  }

  .select-item-group {
    flex: 1;
  }

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
        // 解决高度异常的问题
        display: inline-flex;

        .el-checkbox-button__inner {
          border: 0;
          border-radius: 4px;
          padding: 0 8px;
          font-size: 14px;
          height: 22px;
          line-height: 22px;
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
  computed: {
    isSelectAll() {
      return this.model.length === this.selectItemList.length;
    },
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.model = val;
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
    this.refreshSelectAll();
  },
  methods: {
    handleSelectAllChange() {
      // 选中【全部】的场合
      if (this.selectAllModel.findIndex(item => item === this.selectAllLabel) !== -1) {
        if (!this.isSelectAll) {
          this.model = this.selectItemList.map(selectItem => selectItem.label);
        }
      } else {
        this.model = [];
      }
    },
    handleChange() {
      this.refreshSelectAll();
      this.$emit('input', this.model);
    },
    refreshSelectAll() {
      if (this.isSelectAll) {
        this.selectAllModel = [this.selectAllLabel];
      } else {
        this.selectAllModel = [];
      }
    },
    handleExpand() {
      this.expand = !this.expand;
    },
  },
};
</script>
