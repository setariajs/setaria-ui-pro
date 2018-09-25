<template>
  <el-card shadow="never" class="el-page-header" :body-style="{
    padding: 0,
  }">
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="crumb in breadCrumb"
        :to="crumb.path ? { path: crumb.path } : undefined"
        :key="crumb.name">
        {{ crumb.meta.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
    <div class="detail">
      <div class="logo" v-if="$slots.logo">
        <slot name="logo"></slot>
      </div>
      <div class="main">
        <div class="row">
          <h1 class="title" v-if="title || $slots.title">
            <template v-if="title">
              {{ title }}
            </template>
            <slot name="title" v-else></slot>
          </h1>
          <div class="action" v-if="$slots.action">
            <slot name="action"></slot>
          </div>
        </div>
        <div class="row">
          <div class="content" v-if="content || $slots.content">
            <template v-if="content">
              {{ content }}
            </template>
            <slot name="content" v-else></slot>
          </div>
          <div class="extra-content" v-if="$slots.extraContent">
            <slot name="extraContent"></slot>
          </div>
        </div>
      </div>
    </div>
    <div class="tabs" v-if="tabList">
      <el-tabs v-model="nestTabActiveKey" @tab-click="handleTabClick">
        <el-tab-pane
          v-for="tab in tabList"
          :key="tab.key"
          :name="tab.key"
          :label="tab.label"></el-tab-pane>
      </el-tabs>
    </div>
  </el-card>
</template>
<style lang="scss" scoped>
@import "@/style/variables.scss";

.el-page-header {
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
  padding: 16px 32px 0 32px;
  color: rgba(0, 0, 0, 0.65);

  .el-breadcrumb {
    margin-bottom: 16px;
  }

  .detail {
    display: flex;

    .logo,
    .content,
    .extra-content {
      margin-bottom: 16px;
    }

    .logo {
      flex: 0 1 auto;
      margin-right: 16px;
      padding-top: 1px;
    }

    .main,
    .action,
    .extra-content {
      flex: 0 1 auto;
    }

    .main {
      width: 100%;

      .row {
        display: flex;
        width: 100%;

        .title,
        .action {
          margin-bottom: 16px;
        }

        .title,
        .content {
          flex: auto;
        }

        .action,
        .extra-content {
          text-align: right;
        }

        .title {
          font-size: 20px;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.85);
        }

        .action {
          margin-left: 56px;
          min-width: 266px;
        }

        .extra-content {
          margin-left: 88px;
          min-width: 242px;
        }

        @media screen and (max-width: $--lg) {
          .extra-content {
            margin-left: 44px;
          }
        }

        @media screen and (max-width: $--md) {
          .extra-content {
            margin-left: 20px;
          }
        }
      }

      @media screen and (max-width: $--sm) {
        .row {
          display: block;

          .action,
          .extra-content {
            margin-left: 0;
            text-align: left;
          }
        }
      }
    }

  }

  @media screen and (max-width: "576px") {
    .detail {
      display: block;
    }
  }

  .tabs {
    margin-bottom: -15px;
  }
}
</style>

<script>
import { get } from '@/model/util';

export default {
  name: 'ElPageHeader',
  props: {
    routes: {
      type: Array,
      // 默认使用Vue实例上的$route对象
      default() {
        return this.$route.matched;
      },
    },
    title: String,
    content: String,
    tabList: Array,
    tabActiveKey: null,
  },
  data() {
    return {
      nestTabActiveKey: null,
      breadCrumb: [],
    };
  },
  watch: {
    tabActiveKey: {
      immediate: true,
      handler(val) {
        this.nestTabActiveKey = val;
      },
    },
    nestTabActiveKey: {
      immediate: true,
      handler(val) {
        this.$emit('update:tabActiveKey', val);
      },
    },
    $route: {
      immediate: true,
      handler(val) {
        this.breadCrumb = val.matched.map((item, index) => {
          const ret = item;
          if (get(ret, 'meta.show', null) !== false) {
            if (ret.path === '' && index === 0) {
              ret.path = '/';
            }
          } else {
            delete ret.path;
          }
          return ret;
        });
      },
    },
  },
  methods: {
    /**
     * Tab点击事件处理
     * @event
     * @param tabCompoent 被点击的Tab标签页的实例
     * @param evt Event事件对象
     */
    handleTabClick(tabComponent, evt) {
      // 保证先刷新tabActiveKey的值，再触发tab-click事件
      this.$nextTick(() => {
        const tab = this.tabList.find(item => item.key === this.nestTabActiveKey);
        this.$emit('tab-click', tab, evt);
      });
    },
  },
};
</script>
