<template>
  <div class="advanced-profile">
    <el-page-header
      class="header"
      title="单号：234231029431"
      :tab-list="headerTabList"
      :tab-active-key.sync="headerTabActiveKey">
      <img src="https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png" slot="logo"/>
      <el-description-list size="small" col="2" slot="content">
        <el-description term="创建人">曲丽丽</el-description>
        <el-description term="订购产品">XX 服务</el-description>
        <el-description term="创建时间">2017-07-07</el-description>
        <el-description term="关联单据">
          <el-button href="" type="text" class="button">12421</el-button>
        </el-description>
        <el-description term="生效日期">2017-07-07 ~ 2017-08-08</el-description>
        <el-description term="备注">请于两个工作日内确认</el-description>
      </el-description-list>
      <div slot="action">
        <el-button-group class="control-button-group">
          <el-button size="small">操作</el-button>
          <el-button size="small">操作</el-button>
          <el-dropdown>
            <el-button size="small"><i class="el-icon-more"></i></el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a">选项一</el-dropdown-item>
              <el-dropdown-item command="b">选项二</el-dropdown-item>
              <el-dropdown-item command="c">选项三</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-button-group>
        <el-button type="primary" size="small">主操作</el-button>
      </div>
      <el-row slot="extraContent" class="header-extra">
        <el-col :xs="24" :md="12">
          <div class="label">
            状态
          </div>
          <div class="detail">
            待批准
          </div>
        </el-col>
        <el-col :xs="24" :md="12">
          <div class="label">
            订单金额
          </div>
          <div class="detail">
            ¥ 568.08
          </div>
        </el-col>
      </el-row>
    </el-page-header>
    <el-grid-content class="content">
      <el-card shadow="never" header="流程进度" class="project-process">
        <el-steps
          :active="projectProcessActive"
          class="project-process-step"
          process-status="wait">
          <el-step title="创建项目">
            <div slot="description" class="step-description">
              <div>曲丽丽</div>
              <div>2016-12-12 12:32</div>
            </div>
          </el-step>
          <el-step>
            <span
              slot="title"
              :style="{
                'font-weight': 2 === projectProcessActive ? '500': '',
                'color': 'rgba(0, 0, 0, 0.85)',
              }">
              部门初审
            </span>
            <div slot="description" class="step-description">
              <div>周毛毛</div>
              <div>
                <el-button type="text" size="small">
                  催一下
                </el-button>
              </div>
            </div>
          </el-step>
          <el-step title="财务复核">
          </el-step>
          <el-step>
            <span slot="title" style="margin-left: 15px;">
              完成
            </span>
          </el-step>
        </el-steps>
      </el-card>
      <el-card shadow="never" header="用户信息" class="user-info">
        <el-description-list>
          <el-description term="用户姓名">付小小</el-description>
          <el-description term="会员卡号">32943898021309809423</el-description>
          <el-description term="身份证">3321944288191034921</el-description>
          <el-description term="联系方式">18112345678</el-description>
          <el-description term="联系地址">
            曲丽丽 18100000000 浙江省杭州市西湖区黄姑山路工专路交叉路口
          </el-description>
        </el-description-list>
        <el-description-list title="信息组">
          <el-description term="某某数据">725</el-description>
          <el-description term="该数据更新时间">2017-08-08</el-description>
          <el-description>&nbsp;</el-description>
          <el-description>
            <span slot="term">
              某某数据
              <el-tooltip content="数据说明">
                <i class="fa fa-info-circle" style="color: rgba(0, 0, 0, 0.43);"></i>
              </el-tooltip>
            </span>
            725
          </el-description>
          <el-description term="该数据更新时间">2017-08-08</el-description>
        </el-description-list>
        <h4 style="margin-bottom: 16px">信息组</h4>
        <el-card shadow="never" header="多层级信息组" type="inner" class="multi-level-info">
          <el-description-list size="small" title="组名称">
            <el-description term="负责人">林东东</el-description>
            <el-description term="角色码">1234567</el-description>
            <el-description term="所属部门">XX公司 - YY部</el-description>
            <el-description term="过期时间">2017-08-08</el-description>
            <el-description term="描述">
              这段描述很长很长很长很长很长很长很长很长很长很长很长很长很长很长...
            </el-description>
          </el-description-list>
          <el-divider style="margin: 16px 0;" />
          <el-description-list size="small" title="组名称" col="1">
            <el-description term="学名">
              Citrullus lanatus (Thunb.) Matsum. et
              Nakai一年生蔓生藤本；茎、枝粗壮，具明显的棱。卷须较粗..
            </el-description>
          </el-description-list>
          <el-divider style="margin: 16px 0;" />
          <el-description-list size="small" title="组名称">
            <el-description term="负责人">付小小</el-description>
            <el-description term="角色码">1234568</el-description>
          </el-description-list>
        </el-card>
      </el-card>
      <el-card header="用户近半年来电记录">
        <div class="no-data">
          <i class="fa fa-frown-o"></i>暂无数据
        </div>
      </el-card>
      <el-card
        :tab-list="operationTabList"
        @tab-click="handleOperationTabClick"
        :active-tab-name.sync="operationActiveTabName">
        <el-table
          :data="getOperationListByTabName(operationActiveTabName)"
          v-loading="loading">
          <el-table-column label="操作类型" prop="type"/>
          <el-table-column label="操作人" prop="name"/>
          <el-table-column label="执行结果">
            <template slot-scope="scope">
              <el-badge
                :status="scope.row.status === 'agree' ? 'success' : 'error'"
                :text="scope.row.status === 'agree' ? '成功' : '驳回'">
              </el-badge>
            </template>
          </el-table-column>
          <el-table-column label="操作时间" prop="updatedAt"/>
          <el-table-column label="备注" prop="memo"/>
        </el-table>
      </el-card>
    </el-grid-content>
  </div>
</template>
<style lang="scss" scoped>
@import '@/style/variables.scss';

.advanced-profile {
  .header {
    .detail {
      .logo {
        img {
          width: 28px;
          height: 28px;
        }
      }
    }

    .button {
      padding-top: 0;
      padding-bottom: 0;
    }

    .control-button-group {
      margin-right: 8px;
    }

    .header-extra {
      .label {
        color: $--color-text-secondary;
      }
      .detail {
        color: $--heading-color;
        font-size: 20px;
      }
    }
  }

  .content {
    .el-card + .el-card {
      margin-top: 24px;
    }

    .project-process {
      .project-process-step {
        margin: 0 50px;

        /deep/ {
          .el-step {
            .el-step__main {
              margin-left: -20px;

              .el-step__title {
                font-size: 16px;
                color: rgba(0, 0, 0, 0.65);
              }

              .step-description {
                color: rgba(0, 0, 0, 0.45);

                .el-button {
                  padding-top: 0;
                  padding-bottom: 0;
                }
              }
            }
          }
        }
      }
    }

    .user-info {
      .el-description-list {
        margin-bottom: 24px;
      }

      .multi-level-info {
        margin-bottom: 16px;

        .el-description-list {
          margin-bottom: 0;
        }
      }
    }

    .no-data {
      color: $--disabled-color-base;
      text-align: center;
      line-height: 64px;
      font-size: 16px;
      i {
        font-size: 24px;
        margin-right: 16px;
        position: relative;
        top: 3px;
      }
    }
  }
}
</style>
<script>
import { StoreGlobalAPI } from 'setaria';

export default {
  name: 'AdvancedProfile',
  data() {
    return {
      headerTabList: [
        {
          key: 'detail',
          label: '详情',
        },
        {
          key: 'rule',
          label: '规则',
        },
      ],
      operationTabList: [
        {
          name: 'tab1',
          label: '操作日志一',
        },
        {
          name: 'tab2',
          label: '操作日志二',
        },
        {
          name: 'tab3',
          label: '操作日志三',
        },
      ],
      headerTabActiveKey: 'detail',
      projectProcessActive: 2,
      operationActiveTabName: 'tab1',
    };
  },
  computed: {
    ...StoreGlobalAPI.mapState({
      advancedOperation1List: state => state.profile.advancedOperation1List,
      advancedOperation2List: state => state.profile.advancedOperation2List,
      advancedOperation3List: state => state.profile.advancedOperation3List,
    }),
    loading() {
      return this.$store.state.loading.actions['profile/fetchAdvanced'];
    },
  },
  mounted() {
    this.$store.dispatch('profile/fetchAdvanced');
  },
  methods: {
    handleOperationTabClick() {
    },
    getOperationListByTabName(val) {
      let listKey = '';
      switch (val) {
        case 'tab1':
          listKey = 'advancedOperation1List';
          break;
        case 'tab2':
          listKey = 'advancedOperation2List';
          break;
        case 'tab3':
          listKey = 'advancedOperation3List';
          break;
        default:
          listKey = 'advancedOperation1List';
      }
      return this[listKey];
    },
  },
};
</script>
