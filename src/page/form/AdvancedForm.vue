<template>
  <div class="advanced-form">
    <el-page-header
      title="高级表单"
      content="高级表单常见于一次性输入和提交大批量数据的场景。">
    </el-page-header>
    <el-grid-content>
      <el-card header="仓库管理" shadow="never">
        <el-form ref="houseForm" size="small" :model="houseForm" :rules="rules">
          <el-row>
            <el-col :lg="6" :md="12" :sm="24">
              <el-form-item :label="fieldLabels['name']" prop="name">
                <el-input id="name" ref="name" placeholder="请输入仓库名称" v-model="houseForm.name"/>
              </el-form-item>
            </el-col>
            <el-col :offset="2" :lg="7" :md="12" :sm="24">
              <el-form-item :label="fieldLabels['url']" prop="url">
                <el-input id="url" ref="url" v-model="houseForm.url">
                  <template slot="prepend">http://</template>
                  <template slot="append">.com</template>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :offset="2" :lg="7" :md="12" :sm="24">
              <el-form-item :label="fieldLabels['owner']" prop="owner">
                <el-select ref="owner" v-model="houseForm.owner" placeholder="请选择管理员">
                  <el-option label="付晓晓" value="xiao"/>
                  <el-option label="周毛毛" value="mao"/>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :lg="6" :md="12" :sm="24">
              <el-form-item :label="fieldLabels['approver']" prop="approver">
                <el-select ref="approver" v-model="houseForm.approver" placeholder="请选择审批人">
                  <el-option label="付晓晓" value="xiao"/>
                  <el-option label="周毛毛" value="mao"/>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :offset="2" :lg="7" :md="12" :sm="24">
              <el-form-item :label="fieldLabels['dateRange']" prop="dateRange">
                <el-date-picker
                  ref="dateRange"
                  v-model="houseForm.dateRange"
                  type="daterange"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"/>
              </el-form-item>
            </el-col>
            <el-col :offset="2" :lg="7" :md="12" :sm="24">
              <el-form-item :label="fieldLabels['type']" prop="type">
                <el-select ref="type" v-model="houseForm.type" placeholder="请选择仓库类型">
                  <el-option label="私密" value="private"/>
                  <el-option label="公开" value="public"/>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-card>
      <el-card header="任务管理" shadow="never">
        <el-form ref="taskForm" size="small" :model="taskForm" :rules="rules">
          <el-row>
            <el-col :lg="6" :md="12" :sm="24">
              <el-form-item :label="fieldLabels['taskName']" prop="taskName">
                <el-input ref="taskName" id="taskName"
                  placeholder="请输入任务名称" v-model="taskForm.taskName"/>
              </el-form-item>
            </el-col>
            <el-col :offset="2" :lg="7" :md="12" :sm="24">
              <el-form-item :label="fieldLabels['desc']" prop="desc">
                <el-input ref="desc" v-model="taskForm.desc"/>
              </el-form-item>
            </el-col>
            <el-col :offset="2" :lg="7" :md="12" :sm="24">
              <el-form-item :label="fieldLabels['executor']" prop="executor">
                <el-select ref="executor" v-model="taskForm.executor" placeholder="请选择执行人">
                  <el-option label="付晓晓" value="xiao"/>
                  <el-option label="周毛毛" value="mao"/>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :lg="6" :md="12" :sm="24">
              <el-form-item :label="fieldLabels['taskOwner']" prop="taskOwner">
                <el-select ref="taskOwner" v-model="taskForm.taskOwner" placeholder="请选择责任人">
                  <el-option label="付晓晓" value="xiao"/>
                  <el-option label="周毛毛" value="mao"/>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :offset="2" :lg="7" :md="12" :sm="24">
              <el-form-item :label="fieldLabels['validTime']" prop="validTime">
                <el-time-picker
                  ref="validTime"
                  v-model="taskForm.validTime"
                  type="validTime"/>
              </el-form-item>
            </el-col>
            <el-col :offset="2" :lg="7" :md="12" :sm="24">
              <el-form-item :label="fieldLabels['taskType']" prop="taskType">
                <el-select ref="taskType" v-model="taskForm.taskType" placeholder="请选择任务类型">
                  <el-option label="私密" value="private"/>
                  <el-option label="公开" value="public"/>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-card>
      <el-card header="成员管理" shadow="never" class="member">
        <el-table
          :data="tableData"
          v-loading="isTableDataLoading"
          header-row-class-name="member-header-row">
          <el-table-column label="成员姓名">
            <template slot-scope="scope">
              <el-input v-model="cacheOriginData[scope.row.key].name" v-if="scope.row.editable"/>
              <span v-else>{{ scope.row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="工号">
            <template slot-scope="scope">
              <el-input v-model="cacheOriginData[scope.row.key].workId" v-if="scope.row.editable"/>
              <span v-else>{{ scope.row.workId }}</span>
            </template>
          </el-table-column>
          <el-table-column label="所属部门">
            <template slot-scope="scope">
              <el-input
                v-model="cacheOriginData[scope.row.key].department"
                v-if="scope.row.editable"/>
              <span v-else>{{ scope.row.department }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <div v-if="scope.row.editable && scope.row.isNew">
                <el-button type="text" @click="handleSaveRow(scope.row)">添加</el-button>
                <el-divider type="vertical"/>
                <el-popover
                  placement="top"
                  width="200"
                  trigger="click"
                  popper-class="advanced-form-delete-button-popover"
                  v-model="scope.row.isDeleteTip">
                  <div>
                    是否要删除此行？
                  </div>
                  <div style="float: right;">
                    <el-button size="small" class="cancel-button"
                      @click="scope.row.isDeleteTip = false">取消</el-button>
                    <el-button size="small" type="primary" class="confirm-button"
                      @click="handleRemoveMember(scope.row)">确定</el-button>
                  </div>
                  <el-button slot="reference" type="text"
                    @click="scope.row.isDeleteTip = true">删除</el-button>
                </el-popover>
              </div>
              <div v-else-if="scope.row.editable">
                <el-button type="text" @click="handleSaveRow(scope.row)">保存</el-button>
                <el-divider type="vertical"/>
                <el-button type="text" @click="handleToggleEditable(scope.row)">取消</el-button>
              </div>
              <div v-else>
                <el-button type="text" @click="handleToggleEditable(scope.row)">编辑</el-button>
                <el-divider type="vertical"/>
                <el-popover
                  placement="top"
                  width="200"
                  trigger="click"
                  popper-class="advanced-form-delete-button-popover"
                  v-model="scope.row.isDeleteTip">
                  <div>
                    是否要删除此行？
                  </div>
                  <div style="float: right;">
                    <el-button size="small" class="cancel-button"
                      @click="scope.row.isDeleteTip = false">取消</el-button>
                    <el-button size="small" type="primary" class="confirm-button"
                      @click="handleRemoveMember(scope.row)">确定</el-button>
                  </div>
                  <el-button slot="reference" type="text"
                    @click="scope.row.isDeleteTip = true">删除</el-button>
                </el-popover>
              </div>
            </template>
          </el-table-column>
        </el-table>
        <el-row>
          <el-col :span="24">
            <el-button class="insert-button" @click="handleNewMember">
              <i class="el-icon-plus"></i>新增成员
            </el-button>
          </el-col>
        </el-row>
      </el-card>
      <el-footer-toolbar>
        <template slot="children">
          <el-popover
            popper-class="advanced-form-error-list-poperover"
            placement="top"
            width="256"
            trigger="click"
            v-model="isErrorTipShow"
            title="表单校验信息">
            <div style="height:215px;overflow-y:auto;">
              <li
                class="error-list-item"
                v-for="(value, key) in errorObject"
                :key="key"
                @click="handleScrollToField(value[0].field)">
                <div class="error-icon">
                  <i class="el-icon-circle-close"/>
                </div>
                <div>
                  <div>{{ value[0].message }}</div>
                  <div class="error-field">{{ fieldLabels[value[0].field] }}</div>
                </div>
              </li>
            </div>
            <span
              class="error-icon"
              v-if="errorCount > 0"
              slot="reference"
              @click="isErrorTipShow = !isErrorTipShow">
              <i class="el-icon-warning"/>{{ errorCount }}
            </span>
          </el-popover>
          <el-button
            class="submit-button"
            type="primary"
            size="small"
            @click="validate"
            :loading="submitting">提交</el-button>
        </template>
      </el-footer-toolbar>
    </el-grid-content>
  </div>
</template>
<style lang="scss" scoped>
@import '@/style/variables.scss';

.advanced-form {
  .el-grid-content {
    .el-card {
      margin-bottom: 24px;
    }

    .member {
      .header-row {
        background-color: #fafafa;
      }

      .insert-button {
        width: 100%;
        margin-top: 16px;
        margin-bottom: 8px;
        color: rgba(0, 0, 0, 0.65);
        background-color: #fff;
        border-color: #d9d9d9;
        border-style: dashed;

        &:hover {
          color: #40a9ff;
          background-color: #fff;
          border-color: #40a9ff;
        }
      }
    }

    .error-icon {
      cursor: pointer;
      color: $--color-danger;
      margin-right: 24px;

      i {
        margin-right: 4px;
      }
    }

    .submit-button {
      font-size: 14px;
    }
  }
}

.advanced-form-delete-button-popover {
  .cancel-button,
  .confirm-button {
    padding: 4px 7px;
    font-size: 14px;
  }
}

.advanced-form-error-list-poperover {
  .error-list-item {
    list-style: none;
    border-bottom: 1px solid $--border-color-split;
    padding: 8px 16px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background: $--background-color-base;
    }

    &:last-child {
      border: 0;
    }

    & > div {
      display: inline-block;
    }

    .error-icon {
      vertical-align: top;
      margin-right: 12px;
      color: $--color-danger;
    }

    .error-field {
      font-size: 12px;
      color: $--color-text-secondary;
      margin-top: 2px;
    }
  }
}
</style>
<style lang="scss">
.advanced-form {
  .member {
    .member-header-row {
      th {
        background-color: #fafafa;
      }
    }
  }
}

.advanced-form-error-list-poperover {
  padding: 0;

  .el-popover__title {
    min-width: 177px;
    margin: 0;
    padding: 5px 16px 4px;
    border-bottom: 1px solid #e8e8e8;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
  }
}
</style>
<script>
import { Message } from 'setaria';
import Notice from '@/component/notice/index';
import { cloneDeep, isEmpty } from '@/model/util';

export default {
  name: 'AdvancedForm',
  data() {
    const tableData = [
      {
        key: '1',
        workId: '00001',
        name: 'John Brown',
        department: 'New York No. 1 Lake Park',
      },
      {
        key: '2',
        workId: '00002',
        name: 'Jim Green',
        department: 'London No. 1 Lake Park',
      },
      {
        key: '3',
        workId: '00003',
        name: 'Joe Black',
        department: 'Sidney No. 1 Lake Park',
      },
    ];
    return {
      houseForm: {
        name: '',
        url: '',
        owner: '',
        approver: '',
        dateRange: null,
        type: '',
      },
      taskForm: {
        taskName: '',
        desc: '',
        executor: '',
        taskOwner: '',
        validTime: null,
        taskType: '',
      },
      fieldLabels: {
        name: '仓库名',
        url: '仓库域名',
        owner: '仓库管理员',
        approver: '审批人',
        dateRange: '生效日期',
        type: '仓库类型',
        taskName: '任务名',
        desc: '任务描述',
        executor: '执行人',
        taskOwner: '责任人',
        validTime: '生效日期',
        taskType: '任务类型',
      },
      rules: {
        name: [
          { required: true, message: '请输入仓库名称' },
        ],
        url: [
          { required: true, message: '请输入仓库域名' },
        ],
        owner: [
          { required: true, message: '请选择仓库管理员' },
        ],
        approver: [
          { required: true, message: '请选择审批人' },
        ],
        dateRange: [
          { required: true, message: '请选择生效日期' },
        ],
        type: [
          { required: true, message: '请选择仓库类型' },
        ],
        taskName: [
          { required: true, message: '请输入任务名称' },
        ],
        desc: [
          { required: true, message: '请输入任务描述' },
        ],
        executor: [
          { required: true, message: '请选择执行人' },
        ],
        taskOwner: [
          { required: true, message: '请选择任务责任人' },
        ],
        validTime: [
          { required: true, message: '请选择任务生效日期' },
        ],
        taskType: [
          { required: true, message: '请选择任务类型' },
        ],
      },
      errorObject: {},
      isErrorTipShow: false,
      cacheOriginData: {},
      tableData,
      isTableDataLoading: false,
      insertMemberIndex: 0,
    };
  },
  computed: {
    submitting() {
      return this.$store.state.loading.actions['form/submitAdvancedForm'];
    },
    errorCount() {
      return Object.keys(this.errorObject).length;
    },
  },
  methods: {
    validate() {
      this.errorObject = {};
      let error = {};
      this.$refs.houseForm.validate((isValid, errorObject) => {
        if (!isValid) {
          error = Object.assign({}, error, errorObject);
        }
      });
      this.$refs.taskForm.validate((isValid, errorObject) => {
        if (!isValid) {
          error = Object.assign({}, error, errorObject);
        }
      });
      if (Object.keys(error).length === 0) {
        this.$store.dispatch('form/submitAdvancedForm')
          .then(() => {
            Notice.showMessage(new Message('MBM001S', ['', '提交']));
          });
      } else {
        this.errorObject = error;
      }
    },
    handleScrollToField(key) {
      const formItemNode = document.querySelector(`label[for="${key}"]`);
      if (formItemNode) {
        formItemNode.scrollIntoView(true);
        this.isErrorTipShow = false;
      }
    },
    handleSaveRow(row) {
      this.isTableDataLoading = true;
      setTimeout(() => {
        const { name, workId, department } = this.cacheOriginData[row.key] || {};
        if (isEmpty(name) || isEmpty(workId) || isEmpty(department)) {
          Notice.showMessage(new Message('MBM006E'));
          this.isTableDataLoading = false;
          return;
        }
        // 保存成员信息
        const target = this.tableData.find(item => item.key === row.key);
        if (target) {
          Object.assign(target, this.cacheOriginData[row.key]);
        }
        if (target.isNew) {
          target.isNew = false;
        }
        this.isTableDataLoading = false;
        this.handleToggleEditable(row);
      }, 500);
    },
    handleToggleEditable(row) {
      const rowData = row;
      rowData.editable = !rowData.editable;
      if (rowData.editable) {
        // 缓存原始数据
        this.cacheOriginData[row.key] = { ...row };
      }
      const tableData = cloneDeep(this.tableData);
      // 刷新成员管理一览状态
      this.$set(this, 'tableData', tableData);
    },
    handleRemoveMember(row) {
      const targetIndex = this.tableData.findIndex(item => item.key === row.key);
      if (targetIndex !== -1) {
        this.tableData.splice(targetIndex, 1);
      }
    },
    handleNewMember() {
      const newMember = {
        key: `NEW_TEMP_ID_${this.insertMemberIndex}`,
        workId: '',
        name: '',
        department: '',
        editable: true,
        isNew: true,
      };
      this.tableData.push(newMember);
      this.cacheOriginData[newMember.key] = newMember;
      this.insertMemberIndex += 1;
      // this.$set(this, 'tableData', tableData);
    },
  },
};
</script>
