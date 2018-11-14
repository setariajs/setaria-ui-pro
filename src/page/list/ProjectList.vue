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
    <el-list :grid="{ gutter: 24, lg: 4, md: 3, sm: 2, xs: 1 }">
      <el-list-item v-for="item in listData" :key="item.id">
        <el-card shadow="hover">
          <img
            slot="cover"
            alt="example"
            :src="item.cover">
          <el-card-meta>
            <a href="javascript:" slot="title" class="title">
              {{ item.title }}
            </a>
            <div slot="description" class="description">
              <el-ellipsis
                full-width-recognition
                :lines="2">
                {{ item.subDescription }}
              </el-ellipsis>
            </div>
          </el-card-meta>
          <div class="card-item-content">
            <span>{{ getDateFromNow(item.updatedAt) }}</span>
            <el-avatar-list size="small">
              <el-avatar-item
                v-for="member in item.members"
                :key="`${item.id}-avatar-${member.id}`"
                :tip="member.name"
                :src="member.avatar"/>
            </el-avatar-list>
          </div>
        </el-card>
      </el-list-item>
    </el-list>
  </div>
</template>
<style lang="scss" scoped>
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
    margin-top: 12px;

    .el-list-item {
      margin-bottom: 16px;
      padding-left: 0;
      padding-right: 0;

      .el-card {
        .title {
          color: rgba(0, 0, 0, 0.85);
          font-weight: 500;
        }

        .description {
          height: 44px;
          line-height: 22px;
        }

        &:hover {
          cursor: pointer;

          .title {
            color: $--color-primary;
          }
        }

        .card-item-content {
          display: flex;
          margin-top: 16px;
          margin-bottom: -4px;
          line-height: 20px;
          height: 20px;

          & > span {
            color: $--color-text-secondary;
            flex: 1;
            font-size: 12px;
          }
          .el-avatar-list {
            flex: 0 1 auto;
          }
        }
      }
    }
  }
}
</style>
<script>
import { fromNow } from '@/model/util';

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
  },
};
</script>
