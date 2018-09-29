<template>
  <div class="article-list">
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
        <el-form-item label="Owner：" prop="owners">
          <el-select
            class="owner"
            v-model="form.owners"
            multiple
            placeholder="请选择Owner">
            <el-option
              v-for="owner in ownerList"
              :label="owner.name"
              :value="owner.id"
              :key="owner.id"/>
          </el-select>
          <div>
            <el-button type="text" @click="handleSetOwner">只看自己的</el-button>
          </div>
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
    <el-card shadow="never" :body-style="{
      'padding': '8px 32px 32px',
    }">
      <el-list
        item-layout="vertical"
        load-more="加载更多"
        :loading.sync="loading"
        :loading-config="loadingConfig"
        @load-more-click="handleLoadMore">
        <el-list-item v-for="item in listData" :key="item.id">
          <el-list-item-meta slot="meta">
            <a href="javascript:" slot="title" class="title">
              {{ item.title }}
            </a>
            <span slot="description" class="description">
              <el-tag type="info" size="small">
                Design
              </el-tag>
              <el-tag type="info" size="small">
                设计语言
              </el-tag>
            </span>
          </el-list-item-meta>
          <div>
            {{ item.content }}
            <div class="content-extra">
              <!-- <span class="avatar"> -->
              <img :src="item.avatar" class="img"/>
              <!-- </span> -->
              &nbsp;
              <a href="javascript:">{{ item.owner }}</a>
              发布在
              &nbsp;
              <a href="javascript:">{{ item.href }}</a>
              &nbsp;
              <span class="date">
                {{ formatDate(item.updatedAt) }}
              </span>
            </div>
          </div>
          <div slot="actions" class="actions">
            <li>
              <i class="fa fa-star-o"></i> {{ item.star }}
            </li>
            <li>
              <i class="fa fa-thumbs-o-up"></i> {{ item.like }}
            </li>
            <li>
              <i class="fa fa-commenting-o"></i> {{ item.message }}
            </li>
          </div>
          <div slot="extra" class="extra">
          </div>
        </el-list-item>
      </el-list>
    </el-card>
  </div>
</template>
<style lang="scss" scoped>
@import '@/style/variables.scss';

.article-list {
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

    .owner {
      max-width: 286px;
    }
    .user,
    .rate {
      max-width: 200px;
    }
  }

  .el-list {
    .el-list-item {
      padding-top: 16px;
      padding-bottom: 16px;
    }

    .content-extra {
      margin-top: 16px;

      .img {
        width: 20px;
        height: 20px;
        display: inline-block;
        border-radius: 50%;
        vertical-align: top;
      }

      .avatar {
        width: 20px;
        height: 20px;
        position: relative;
        display: inline-block;
      }


      .el-button {
        padding-top: 0;
        padding-bottom: 0;
      }

      .date {
        color: $--color-text-placeholder;
      }
    }

    .title {
      color: rgba(0, 0, 0, 0.85);
      font-weight: 500;

      &:hover {
        color: $--color-primary;
      }
    }

    .description {
      .el-tag + .el-tag {
        margin-left: 8px;
      }
    }

    .extra {
      width: 272px;
      height: 1px;
    }

    .actions {
      li {
        display: inline-block;
        padding: 0 16px;
        cursor: pointer;
        border-right: 1px solid #e8e8e8;
        color: $--color-text-secondary;

        &:first-child {
          padding-left: 0;
        }

        &:last-child {
          border-right: 0;
        }
      }
    }
  }
}
</style>
<script>
import { formatDate } from '@/model/util';

const ownerList = [
  {
    id: 'wzj',
    name: '我自己',
  },
  {
    id: 'wjh',
    name: '吴家豪',
  },
  {
    id: 'zxx',
    name: '周星星',
  },
  {
    id: 'zly',
    name: '赵丽颖',
  },
  {
    id: 'ym',
    name: '姚明',
  },
];

export default {
  name: 'ArticleList',
  data() {
    return {
      form: {
        category: [],
        owners: ['wjh', 'zxx'],
        user: '',
        rate: '',
      },
      ownerList,
      fakeList: [],
      loading: false,
      loadingConfig: {
        text: '加载中',
      },
    };
  },
  computed: {
    listData() {
      return this.$store.state.list.fakeList;
    },
  },
  mounted() {
    this.$store.dispatch('list/queryFakeList', {
      count: 5,
    });
  },
  methods: {
    handleSetOwner() {
      this.form.owners.splice(0, this.form.owners.length);
      this.form.owners.push('wzj');
    },
    formatDate(val) {
      return formatDate(val, 'YYYY-MM-DD HH:mm');
    },
    async handleLoadMore() {
      await this.$store.dispatch('list/queryFakeList', {
        count: 5,
      });
      this.loading = false;
    },
  },
};
</script>
