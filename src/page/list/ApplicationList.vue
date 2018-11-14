<template>
  <div class="project-list">
    <el-card shadow="never">
      <el-form
        class="condition"
        :model="form"
        label-width="90px"
        size="small">
        <el-form-item label="所属类目：" prop="category" class="category">
          <!-- <div style="display: inline-block:line-height: 40px;"> -->
          <el-tag-select v-model="form.category" expandable>
            <el-tag-select-item label="1">类目一</el-tag-select-item>
            <el-tag-select-item label="2">类目二</el-tag-select-item>
            <el-tag-select-item label="3">类目三</el-tag-select-item>
            <el-tag-select-item label="4">类目四</el-tag-select-item>
            <el-tag-select-item label="5">类目五</el-tag-select-item>
            <el-tag-select-item label="6">类目六</el-tag-select-item>
            <el-tag-select-item label="7">类目七</el-tag-select-item>
            <el-tag-select-item label="8">类目八</el-tag-select-item>
            <el-tag-select-item label="9">类目九</el-tag-select-item>
            <el-tag-select-item label="10">类目十</el-tag-select-item>
            <el-tag-select-item label="11">类目十一</el-tag-select-item>
            <el-tag-select-item label="12">类目十二</el-tag-select-item>
            <el-tag-select-item label="13">类目十三</el-tag-select-item>
          </el-tag-select>
          <!-- </div> -->
        </el-form-item>
        <el-form-item label="其他选项：">
          <el-row>
            <el-col :lg="8">
              <el-form-item label="活跃用户：">
                <el-select class="user" placeholder="不限" v-model="form.user">
                  <el-option label="张三" value="lisa"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :lg="8">
              <el-form-item label="好评度：">
                <el-select class="rate" placeholder="不限" v-model="form.rate">
                  <el-option label="优秀" value="good"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
    </el-card>
    <el-list
      :grid="{ gutter: 24, lg: 4, md: 3, sm: 2, xs: 1 }"
      class="list"
      :loading="loading">
      <el-list-item v-for="item in listData" :key="item.id">
        <el-card shadow="hover">
          <el-card-meta :title="item.title" class="card-meta">
            <el-avatar :src="item.avatar" size="small" slot="avatar"></el-avatar>
          </el-card-meta>
          <div class="card-info">
            <div>
              <p>活跃用户</p>
              <p>
                {{ formatWan(item.activeUser) }}
                <span class="wan">
                  万
                </span>
              </p>
            </div>
            <div>
              <p>新增用户</p>
              <p>{{ numeral(item.newUser).format('0,0') }}</p>
            </div>
          </div>
          <template slot="actions">
            <el-card-action-item>
              <el-tooltip content="下载" placement="top">
                <i class="el-icon-download"></i>
              </el-tooltip>
            </el-card-action-item>
            <el-card-action-item>
              <el-tooltip content="编辑" placement="top">
                <i class="el-icon-edit"></i>
              </el-tooltip>
            </el-card-action-item>
            <el-card-action-item>
              <el-tooltip content="分享" placement="top">
                <i class="el-icon-share"></i>
              </el-tooltip>
            </el-card-action-item>
            <el-card-action-item>
              <el-dropdown
                :hide-on-click="false"
                placement="bottom-start"
                class="more">
                <i class="el-icon-more"></i>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>1st menu item</el-dropdown-item>
                  <el-dropdown-item>2nd menu item</el-dropdown-item>
                  <el-dropdown-item>3rd menu item</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-card-action-item>
          </template>
        </el-card>
      </el-list-item>
    </el-list>
  </div>
</template>
<style lang="scss" scoped>
@import "~setaria-ui/packages/theme-chalk/src/mixins/utils";
@import '@/style/variables.scss';

.project-list {
  .el-card + .el-card {
    margin-top: 24px;
  }

  .condition {
    & > .el-form-item:not(:last-child) {
      border-bottom: 1px dashed #e8e8e8;
    }

    & > .el-form-item:last-child {
      margin-bottom: 0;

      .el-form-item {
        margin-bottom: 0;
      }
    }

    .category {
      padding-bottom: 18px;
    }

    .user,
    .rate {
      max-width: 200px;
    }
  }

  .el-list {
    margin-top: 24px;

    .el-list-item {
      padding-left: 0;
      padding-right: 0;

      .el-card {
        .title {
          color: rgba(0, 0, 0, 0.85);
          font-weight: 500;
        }

        .card-meta {
          line-height: 1.5;
        }

        .card-info {
          @include utils-clearfix;
          margin-top: 16px;
          margin-left: 40px;
          height: 60px;

          & > div {
            position: relative;
            text-align: left;
            float: left;
            width: 50%;
            p {
              line-height: 32px;
              font-size: 24px;
              margin: 0;
            }
            p:first-child {
              color: $--color-text-secondary;
              font-size: 12px;
              line-height: 20px;
              margin-bottom: 4px;
            }
          }

          .wan {
            position: 'relative';
            top: -2px;
            font-size: 14px;
            font-style: 'normal';
            line-height: 20px;
            margin-left: 2px;
          }
        }

        .el-card__actions {
          background-color: #f7f9fa;

          .more {
            &:hover {
              color: $--color-primary;
            }
          }
        }

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
<script>
import numeral from 'numeral';
import { formatWan, fromNow } from '@/model/util';

export default {
  name: 'ProjectList',
  data() {
    return {
      form: {
        category: [],
        user: '',
        rate: '',
      },
      fakeList: [],
    };
  },
  computed: {
    loading() {
      return this.$store.state.loading.actions['list/queryFakeList'];
    },
    listData() {
      return this.$store.state.list.fakeList;
    },
  },
  mounted() {
    this.$store.dispatch('list/queryFakeList', {
      count: 8,
    });
  },
  methods: {
    getDateFromNow(val) {
      return fromNow(val);
    },
    formatWan,
    numeral,
  },
};
</script>
