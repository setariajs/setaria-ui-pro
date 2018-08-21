<template>
  <div>
    <el-page-header
      title="动态查询列表"
      content="通过定义JSON-Schema格式的检索条件和检索结果的结构，可以快速构建一个常用的检索页面。">
    </el-page-header>
    <el-grid-content>
      <el-card>
        <el-template-base-search
          class="search-list"
          ref="searchDataList"
          :condition-schema="conditionSchema"
          :condition="condition"
          :result-schema="resultSchema"
          :result-ui-schema="resultUiSchema"
          :get-result="doGetResult"
          pagination="full"
          :page-size="pageSize"
          pagination-layout="prev, pager, next, jumper"
          result-column-auto-align>
          <div slot="tableButton">
            <el-button size="small" type="primary" plain @click="doCreate">新增</el-button>
          </div>
          <!-- 行数据的控制按钮 -->
          <div slot="tableRowButton" slot-scope="props">
            <el-button type="text" @click="doUpdate(props.row)">修改</el-button>
            <span class="button-separator">|</span>
            <el-button type="text" @click="doDelete(props.row)">删除</el-button>
          </div>
          <!-- 可对数据的显示格式进行自定义 -->
          <template slot="columnActiveFlag" slot-scope="props">
            <span
              :class="{ invalid: props.row.activeFlag === '无效' }">
              {{ props.row.activeFlag }}
            </span>
          </template>
        </el-template-base-search>
      </el-card>
    </el-grid-content>
  </div>
</template>
<style scoped>
  .button-separator {
    margin: 0 5px;
  }
  .invalid {
    color: red;
  }
</style>
<script>
import { Message } from 'setaria';
import Notice from '@/component/notice/index';
import apiHttp from '@/model/resource/apiHttp';

export default {
  data() {
    return {
      // 检索条件对象
      condition: {
        name: '',
        theFetchStart: 0,
        theFetchSize: 10,
      },
      // 检索条件表单Schema定义
      conditionSchema: {
        name: {
          type: 'string',
          title: '用户姓名',
        },
      },
      // 检索结果一览Schema定义
      resultSchema: {
        name: {
          type: 'string',
          title: '姓名',
        },
        gender: {
          type: 'string',
          title: '性别',
        },
        birth: {
          type: 'string',
          title: '出生日期',
          format: 'date',
        },
        mobile: {
          type: 'integer',
          title: '手机号',
        },
        activeFlag: {
          type: 'string',
          title: '状态',
        },
      },
      resultUiSchema: {
        birth: {
          'ui:minWidth': '120px',
        },
        mobile: {
          'ui:minWidth': '120px',
          'ui:headerAlign': 'right',
        },
      },
      // 检索结果一览数据对象
      tableData: [],
      // 检索结果一览每页数据数量
      pageSize: 10,
      // 选中的行
      selectionRows: [],
    };
  },
  methods: {
    /**
     * 检索结果一览数据取得事件处理
     * @event
     */
    async doGetResult(val, currentPage) {
      this.condition.theFetchStart = (currentPage === 1) ? 0 :
        (currentPage - 1) * this.condition.theFetchSize;
      return apiHttp.get('users');
    },
    doCreate() {
      Notice.showMessage(new Message('MBM004I', ['新增']));
    },
    doUpdate({ name }) {
      Notice.showMessage(new Message('MBM004I', [`修改${name}`]));
    },
    doDelete({ name }) {
      Notice.showMessageBox(new Message('MBM002I', [`删除${name}`]))
        .then(() => {
          Notice.showMessage(new Message('MBM001S', [name, '删除']));
        });
    },
  },
};
</script>
