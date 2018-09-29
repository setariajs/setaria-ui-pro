<template>
  <div class="search-list">
    <el-page-header
      title="搜索列表"
      :tab-list="headerTabList"
      :tab-active-key.sync="headerTabActiveKey">
      <div slot="content" class="search">
        <el-input
          class="search-input"
          placeholder="请输入"
          @keyup.native.enter="handleEnterKeyUp">
          <el-button type="primary" slot="append" class="search-button">搜 索</el-button>
        </el-input>
      </div>
    </el-page-header>
    <el-grid-content>
      <router-view></router-view>
    </el-grid-content>
  </div>
</template>
<style lang="scss" scoped>
.search {
  text-align: center;

  .search-input {
    width: 522px;

    .search-button {
      &.el-button {
        font-size: 16px;
        height: 40px;
        background-color: #409EFF;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        color: #fff;
        margin-left: -21px;
        margin-right: -21px;
        border-color: #409EFF;
        border: 1px solid #409EFF;
      }
    }
  }
}
</style>
<script>
import { Message } from 'setaria';
import Notice from '@/component/notice/index';

export default {
  name: 'Search',
  data() {
    return {
      headerTabList: [
        {
          key: 'ArticleList',
          label: '文章',
        },
        {
          key: 'ProjectList',
          label: '项目',
        },
        {
          key: 'ApplicationList',
          label: '应用',
        },
      ],
      headerTabActiveKey: '',
    };
  },
  watch: {
    headerTabActiveKey(val) {
      this.$router.push({
        name: val,
      });
    },
    $route: {
      immediate: true,
      handler({ name }) {
        this.headerTabActiveKey = name;
      },
    },
  },
  methods: {
    handleEnterKeyUp() {
      Notice.showMessage(new Message('MBM004I', ['检索']));
    },
  },
};
</script>
