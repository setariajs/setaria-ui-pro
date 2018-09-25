<template>
  <div class="card-list">
    <el-page-header
      title="卡片列表">
      <div slot="content">
        <p class="content-text">
          段落示意
        </p>
        <div class="content-link">
          <a>
            <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg" />
            快速开始
          </a>
          <a>
            <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg" />
            产品简介
          </a>
          <a>
            <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg" />
            产品文档
          </a>
        </div>
      </div>
      <div class="extra-img" slot="extraContent">
        <img
          alt="这是一个标题"
          src="https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png"
        />
      </div>
    </el-page-header>
    <el-grid-content>
      <el-list :grid="{ gutter: 24, xl: 4, lg: 3, md: 2, sm: 1, xs: 1 }">
        <el-list-item>
          <el-button class="insert-button">
            <i class="el-icon-plus"></i>新增产品
          </el-button>
        </el-list-item>
        <el-list-item v-for="(data, index) in listData" :key="index">
          <el-card shadow="hover" class="card-list-item">
            <el-card-meta :description="data.description">
              <a slot="title">
                {{ data.title }}
              </a>
              <img
                slot="avatar"
                :src="data.avatar"
                class="card-avatar"/>
            </el-card-meta>
            <template slot="actions">
              <el-card-action-item>
                <a>操作一</a>
              </el-card-action-item>
              <el-card-action-item>
                <a>操作二</a>
              </el-card-action-item>
            </template>
          </el-card>
        </el-list-item>
      </el-list>
    </el-grid-content>
  </div>
</template>
<style lang="scss">
@import "@/style/variables.scss";

.card-list {
  .el-card {
    .el-card-meta__detail-title {
      margin-bottom: 12px;
      & > a {
        color: $--color-text-primary;
        display: inline-block;
        max-width: 100%;
      }
    }
    .el-card__actions {
      background: #f7f9fa;
    }
    .el-card__body {
      &:hover {
        .el-card-meta__detail-title {
          & > a {
            color: $--link-hover-color;
          }
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
@import "@/style/variables.scss";

.card-list {
  .content-text {
    margin-top: 0;
  }

  .content-link {
    margin-top: 16px;
    a {
      margin-right: 32px;

      img {
        width: 24px;
      }
    }
    img {
      vertical-align: middle;
      margin-right: 8px;
    }
  }

  @media screen and (max-width: $--md) {
    .content-link {
      a {
        margin-right: 16px;
      }
    }
  }

  .extra-img {
    margin-top: -60px;
    text-align: center;
    width: 195px;
    img {
      width: 100%;
    }
  }

  @media screen and (max-width: $--sm) {
    .extra-img {
      display: none;
    }
  }

  .insert-button {
    width: 100%;
    height: 187px;
    color: $--color-text-secondary;
    background-color: #fff;
    border-color: #d9d9d9;
    border-style: dashed;

    &:hover {
      color: #40a9ff;
      background-color: #fff;
      border-color: #40a9ff;
    }
  }

  .card-list-item {
    cursor: pointer;

    .card-avatar {
      width: 48px !important;
      height: 48px !important;
      border-radius: 48px;
    }
  }
}
</style>
<script>
export default {
  name: 'CardList',
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
};
</script>
