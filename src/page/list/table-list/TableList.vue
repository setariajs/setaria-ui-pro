<template>
  <div class="table-list">
    <el-page-header
      title="查询表格">
    </el-page-header>
    <el-grid-content>
      <el-card>
        <div>
          <el-form
            ref="form"
            :model="form"
            size="small"
            @submit="handleSearch">
            <el-row>
              <el-col :span="8">
                <el-form-item label="规则名称" prop="name">
                  <el-input placeholder="请输入" v-model="form.name"/>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="使用状态" prop="status">
                  <el-select v-model="form.status">
                    <el-option
                      v-for="(status, index) in statusLabelList"
                      :label="status"
                      :value="index"
                      :key="index"/>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <div v-if="isSimpleSearchCondition">
                  <el-button
                    class="button"
                    type="primary"
                    native-type="submit"
                    size="small">查询</el-button>
                  <el-button
                    class="button"
                    size="small"
                    @click="handleResetSearchCondition">重置</el-button>
                  <el-button
                    class="button"
                    type="text"
                    size="small"
                    @click="isSimpleSearchCondition = !isSimpleSearchCondition">
                    {{ isSimpleSearchCondition ? '展开' : '收起' }}
                    <i :class="{
                      'el-icon-arrow-down': isSimpleSearchCondition,
                      'el-icon-arrow-up': !isSimpleSearchCondition,
                    }"></i>
                  </el-button>
                </div>
                <el-form-item label="调用次数" prop="callNo" v-else>
                  <el-input-number v-model="form.callNo"/>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row v-if="!isSimpleSearchCondition">
              <el-col :span="8">
                <el-form-item label="更新日期" prop="updateDate">
                  <el-date-picker
                    v-model="form.updateDate"/>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="使用状态" prop="status1">
                  <el-select v-model="form.status1">
                    <el-option
                      v-for="(status, index) in statusLabelList"
                      :label="status"
                      :value="index"
                      :key="index"/>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="使用状态" prop="status2">
                  <el-select v-model="form.status2">
                    <el-option
                      v-for="(status, index) in statusLabelList"
                      :label="status"
                      :value="index"
                      :key="index"/>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row v-if="!isSimpleSearchCondition">
              <el-col :span="8" :offset="16" :style="{ 'text-align': 'right' }">
                <el-button
                  class="button"
                  type="primary"
                  native-type="submit"
                  size="small">查询</el-button>
                <el-button
                  class="button"
                  native-type="reset"
                  size="small">重置</el-button>
                <el-button
                  class="button"
                  type="text"
                  size="small"
                  @click="isSimpleSearchCondition = !isSimpleSearchCondition">
                  {{ isSimpleSearchCondition ? '展开' : '收起' }}
                  <i :class="{
                    'el-icon-arrow-down': isSimpleSearchCondition,
                    'el-icon-arrow-up': !isSimpleSearchCondition,
                  }"></i>
                </el-button>
              </el-col>
            </el-row>
          </el-form>
          <el-row class="list-operator">
            <el-col :span="16" class="col">
              <el-button
                class="button"
                type="primary"
                icon="el-icon-plus"
                size="small"
                @click="handleCreate">新建</el-button>
              <el-button
                class="button"
                size="small"
                v-if="tableSelectionList.length > 0">批量操作</el-button>
              <el-dropdown
                class="more-action"
                @command="handleMoreAction"
                v-if="tableSelectionList.length > 0">
                <el-button
                  class="button"
                  size="small">
                  更多操作&nbsp;<i class="el-icon-arrow-down"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="delete">删除</el-dropdown-item>
                  <el-dropdown-item>批量审批</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
          </el-row>
          <el-alert
            title=""
            :closable="false"
            class="table-alert">
            <i class="el-icon-info"/>
            <span>
              已选择
              <a class="key-text"> {{ tableSelectionCount }} </a> 项
              <span class="call-total-no">
                服务调用次数总计
                <span class="key-text"> {{ tableSelectedTotalCallNo }} 万 </span>
              </span>
              <el-button
                type="text"
                class="clear-selection"
                @click="hanleClearTableSelection">清空</el-button>
            </span>
          </el-alert>
          <el-table
            ref="table"
            :data="searchResultList"
            @filter-change="handleTableFilterChange"
            @select="handleTableRowSelect"
            @select-all="handleTableRowSelectAll"
            @sort-change="handleTableSortChange"
            v-loading="isLoadingSearchResultList">
            <el-table-column
              type="selection"
              width="55"
              :selectable="tableRowSelectable"/>
            <el-table-column
              label="规则名称"
              prop="name"/>
            <el-table-column
              label="描述"
              prop="desc"/>
            <el-table-column
              label="服务调用次数"
              prop="callNo"
              column-key="callNo"
              sortable="custom">
              <template slot-scope="scope">
                {{ scope.row.callNo }}万
              </template>
            </el-table-column>
            <el-table-column
              label="状态"
              prop="status"
              column-key="status"
              :filters="statusFilterList"
              filter-placement="bottom-end">
              <template slot-scope="scope">
                <el-badge
                  :status="statusValueMap[scope.row.status]"
                  :text="statusLabelList[scope.row.status]">
                </el-badge>
              </template>
            </el-table-column>
            <el-table-column
              label="上次调度时间"
              prop="updatedAt"
              column-key="updatedAt"
              sortable="custom"
              min-width="100px">
              <template slot-scope="scope">
                {{ formatDate(scope.row.updatedAt) }}
              </template>
            </el-table-column>
            <el-table-column
              label="操作">
              <template slot-scope="scope">
                <el-button type="text" @click="handleConfigRule(scope.row)">配置</el-button>
                <el-divider type="vertical"></el-divider>
                <el-button type="text">订阅警报</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            class="pagination"
            :current-page="pagination.current"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="pagination.pageSize"
            layout="sizes, prev, pager, next, jumper"
            :total="pagination.total"
            @current-change="handleCurrentChange"
            @size-change="handleSizeChange">
          </el-pagination>
        </div>
      </el-card>
    </el-grid-content>
    <el-dialog
      class="table-list__dialog"
      title="新建规则"
      :visible.sync="createFormVisible"
      width="40%">
      <create-form ref="createForm" v-model="selectedRule" v-if="createFormVisible"></create-form>
      <span slot="footer">
        <el-button @click="handleCloseCreateForm" size="small">取 消</el-button>
        <el-button type="primary" @click="handleCreateRule" size="small">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      class="table-list__dialog"
      title="规则配置"
      :visible.sync="allocationStepFormVisible">
      <allocation-step-form
        v-model="selectedRule"
        :current-step.sync="currentStep"
        v-if="allocationStepFormVisible"
        @complete="handleUpdateRule"/>
      <span slot="footer">
        <el-button
          @click="handlePrev"
          size="small"
          class="prev-step-button"
          v-if="currentStep > 0">上一步</el-button>
        <el-button @click="handleUpdateAllocationStepFormVisible()" size="small">取 消</el-button>
        <el-button type="primary" @click="handleNext" size="small">
          <template v-if="currentStep === 2">
            完成
          </template>
          <template v-else>
            下一步
          </template>
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>
<style lang="scss" scoped>
$--col--padding: 24px !default;

.table-list {
  .el-form {
    margin-left: -20px;
    margin-right: -20px;

    /deep/ {
      .el-form-item {
        display: flex;

        .el-form-item__content {
          flex: 1;
        }
      }
    }

    .el-row {
      .el-col {
        padding-left: $--col--padding;
        padding-right: $--col--padding;
      }
    }

    .el-input-number,
    .el-date-editor {
      width: 100%;
    }
  }

  .button {
    padding: 8px 15px;
    font-size: 14px;
  }

  .list-operator {
    margin-bottom: 16px;

    .more-action {
      margin-left: 10px;
    }
  }

  .table-alert {
    border: 1px solid #91d5ff;
    background-color: #e6f7ff;
    color: rgba(0, 0, 0, 0.65);
    border-radius: 4px;
    font-size: 14px;
    margin-bottom: 16px;
    padding-top: 0;
    padding-bottom: 0;

    .el-icon-info {
      color: #1890ff;
      margin-left: -12px;
      margin-right: 4px;
    }

    .key-text {
      font-weight: 600;
    }

    a {
      color: #1890ff;
    }

    .call-total-no {
      margin-left: 8px;
    }

    .clear-selection {
      margin-left: 18px;
    }
  }

  .pagination {
    margin: 16px 0;
  }

  .table-list__dialog {
    .prev-step-button {
      float: left;
    }

    /deep/ {
      .el-dialog__body {
        padding: 32px 48px 40px;
      }
    }
  }
}
</style>
<script>
import { Message } from 'setaria';
import Notice from '@/component/notice/index';
import {
  create as createRule,
  fetch as fetchRuleList,
  remove as removeRule,
  update as updateRule,
} from '@/model/resource/Rule';
import { formatDate, isEmpty, isNumber } from '@/model/util';
import AllocationStepForm from './AllocationStepForm.vue';
import CreateForm from './CreateForm.vue';
// const statusMap = ['default', 'processing', 'success', 'error'];

export default {
  name: 'TableList',
  components: {
    AllocationStepForm,
    CreateForm,
  },
  data() {
    const statusLabelList = ['关闭', '运行中', '已上线', '异常'];
    return {
      // 检索条件表单项目
      form: {
        // 规则名称
        name: null,
        // 调用次数
        callNo: null,
        // 使用状态
        status: null,
        // 更新时间
        updateDate: '',
        status1: null,
        status2: null,
      },
      // 数据检索条件对象
      searchCondition: {
        status: null,
        sorter: null,
      },
      // 是否为简单检索条件模式
      isSimpleSearchCondition: true,
      // 检索结果列表数据
      searchResultList: [],
      // 翻页数据
      pagination: {
        // 当前页
        current: 1,
        // 每页显示条数
        pageSize: 10,
        // 检索结果数据总数
        total: null,
      },
      // 使用状态的显示样式
      statusValueMap: ['default', 'processing', 'success', 'error'],
      // 使用状态列表
      statusLabelList,
      // 检索结果一览表格使用状态筛选列表
      statusFilterList: statusLabelList.map((item, index) => {
        const ret = {
          text: item,
          value: index,
        };
        return ret;
      }),
      // 检索结果列表加载中状态
      isLoadingSearchResultList: false,
      // 检索结果列表选择行一览
      tableSelectionList: [],
      // 是否显示新建规则表单
      createFormVisible: false,
      // 新建规则信息对象
      selectedRule: {},
      // 规则配置页面当前进度
      currentStep: 0,
      // 是否显示配置规则分步设置表单
      allocationStepFormVisible: false,
    };
  },
  computed: {
    tableSelectionCount() {
      if (isEmpty(this.tableSelectionList)) {
        return 0;
      }
      return this.tableSelectionList.length;
    },
    tableSelectedTotalCallNo() {
      if (isEmpty(this.tableSelectionList)) {
        return 0;
      }
      let ret = 0;
      this.tableSelectionList.forEach((item) => {
        ret += item.callNo;
      });
      return ret;
    },
  },
  created() {
    this.fetch();
  },
  methods: {
    /**
     * 根据检索条件取得检索结果列表
     */
    async fetch() {
      // 设置加载检索结果状态
      this.isLoadingSearchResultList = true;
      const { sorter, status } = this.searchCondition;
      const { current: currentPage, pageSize } = this.pagination;
      const res = await fetchRuleList(Object.assign({}, {
        currentPage,
        pageSize,
      }, {
        status,
        sorter,
      }));
      // 保存检索结果条数
      this.pagination.total = res.pagination.total;
      this.searchResultList = res.list || [];
      // 清除加载检索结果状态
      this.isLoadingSearchResultList = false;
      // 等待页面重新渲染完成
      this.$nextTick(() => {
        this.toggleRowSelection(true);
      });
    },
    /**
     * 切换指定行的选择状态
     */
    toggleRowSelection(selection) {
      if (!isEmpty(this.tableSelectionList)) {
        this.searchResultList.forEach((row, index) => {
          const selectedRow = this.tableSelectionList.find(item => item.key === row.key);
          if (!isEmpty(selectedRow)) {
            this.$refs.table.toggleRowSelection(this.searchResultList[index], selection);
          }
        });
      }
    },
    /**
     * 日期格式化
     */
    formatDate(val) {
      return formatDate(val, 'YYYY-MM-DD HH:mm:ss');
    },
    /**
     * 查询按钮点击事件处理
     * @event
     */
    handleSearch() {
      const { status } = this.form;
      this.searchCondition.status = `${isNumber(status) ? status : ''}`;
      this.pagination.current = 1;
      this.fetch();
    },
    /**
     * 重置按钮点击事件处理
     * @event
     */
    handleResetSearchCondition() {
      this.$refs.form.resetFields();
    },
    /**
     * 新建按钮点击事件处理
     * @event
     */
    handleCreate() {
      this.createFormVisible = true;
    },
    /**
     * 更多操作下拉菜单点击事件处理
     * @event
     */
    async handleMoreAction(command) {
      // 选择删除选项的场合
      if (command === 'delete') {
        const keys = this.tableSelectionList.map(item => item.key);
        this.isLoadingSearchResultList = true;
        await removeRule(keys);
        keys.forEach((key) => {
          const index = this.tableSelectionList.findIndex(item => item.key === key);
          if (index !== -1) {
            this.tableSelectionList.splice(index, 1);
          }
        });
        this.fetch();
      }
    },
    /**
     * 清空按钮点击事件处理
     * @event
     */
    hanleClearTableSelection() {
      this.toggleRowSelection(false);
      this.$nextTick(() => {
        this.tableSelectionList = [];
      });
    },
    /**
     * 翻页时的事件处理
     * @event
     */
    handleCurrentChange(val) {
      this.pagination.current = val;
      this.fetch();
    },
    /**
     * 调整每页显示条数的事件处理
     * @event
     */
    handleSizeChange(val) {
      this.pagination.pageSize = val;
      this.fetch();
    },
    /**
     * 表格的筛选条件发生变化时的事件处理
     * @event
     */
    handleTableFilterChange({ status }) {
      let conditionStatusValue = null;
      if (!isEmpty(status)) {
        conditionStatusValue = status.join(',');
      }
      this.searchCondition.status = conditionStatusValue;
      // 回到第一页
      this.pagination.current = 1;
      this.fetch();
    },
    /**
     * 手动勾选检索结果列表数据行的Checkbox时的事件处理
     * @event
     */
    handleTableRowSelect(selection, row) {
      const isSelect = !isEmpty(selection.find(item => item.key === row.key));
      const index = this.tableSelectionList.findIndex(item => item.key === row.key);
      // 选中当前行的场合
      if (isSelect) {
        if (index === -1) {
          this.tableSelectionList.push(row);
        }
      // 取消当前行的选中状态的场合
      } else if (index !== -1) {
        this.tableSelectionList.splice(index, 1);
      }
    },
    /**
     * 手动勾选检索结果列表数据行的所有Checkbox时的事件处理
     * @event
     */
    handleTableRowSelectAll(selection) {
      let currentPageSelectionList = selection;
      // 数据行的Checkbox被全部设为取消选中状态的场合
      if (isEmpty(selection)) {
        currentPageSelectionList = [];
      }
      this.searchResultList.forEach((item) => {
        this.handleTableRowSelect(currentPageSelectionList, item);
      });
    },
    /**
     * 表格的排序条件发生变化时的事件处理
     * @event
     */
    handleTableSortChange({ prop, order }) {
      if (prop === null) {
        this.searchCondition.sorter = null;
      } else {
        this.searchCondition.sorter
          = `${prop}_${order === 'ascending' ? 'ascend' : 'descend'}`;
      }
      this.fetch();
    },
    /**
     * 新建规则弹出框内【取消】按钮点击事件处理
     * @event
     */
    handleCloseCreateForm() {
      this.createFormVisible = false;
    },
    /**
     * 新建规则弹出框内【确定】按钮点击事件处理
     * @event
     */
    async handleCreateRule() {
      const isValid = await this.$refs.createForm.validate();
      // 对输入数据进行保存操作
      if (isValid) {
        await createRule(this.selectedRule.desc);
        Notice.showMessage(new Message('MBM001S', ['', '添加']));
        this.selectedRule = {};
        this.handleCloseCreateForm();
        this.fetch();
      }
    },
    /**
     * 配置按钮点击事件处理
     * @event
     */
    handleConfigRule({ key, name, desc }) {
      this.selectedRule = {
        key,
        name,
        desc,
        target: '1',
        template: '2',
        type: '2',
        startTime: null,
        frequency: '1',
      };
      this.allocationStepFormVisible = true;
    },
    /**
     * 更新规则配置对话框的显示状态
     * @event
     */
    handleUpdateAllocationStepFormVisible(flag) {
      this.allocationStepFormVisible = !!flag;
      // 关闭对话框的场合，重置对应状态
      if (!this.allocationStepFormVisible) {
        this.currentStep = 0;
      }
    },
    /**
     * 规则设置对话框内的上一步按钮点击事件处理
     * @event
     */
    handlePrev() {
      this.currentStep -= 1;
    },
    /**
     * 规则设置对话框内的下一步按钮点击事件处理
     * @event
     */
    handleNext() {
      this.currentStep += 1;
    },
    async handleUpdateRule() {
      // 关闭规则设置对话框
      this.handleUpdateAllocationStepFormVisible();
      const { key, name, desc } = this.selectedRule;
      await updateRule(key, name, desc);
      Notice.showMessage(new Message('MBM001S', ['', '配置']));
      this.selectedRule = {};
      this.fetch();
    },
    /**
     * 当前行的 CheckBox 是否可以勾选事件处理
     */
    tableRowSelectable({ disabled }) {
      return !disabled;
    },
  },
};
</script>
