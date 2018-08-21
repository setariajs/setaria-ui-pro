<template>
  <div>
    <el-page-header
      title="动态表单"
      content="通过定义JSON-Schema格式的表单结构，可以快速构建一个常用的表单页面。">
    </el-page-header>
    <el-grid-content>
      <el-card>
        <el-row type="flex" justify="center">
          <el-col :span="20">
            <el-dynamic-form
              :model="formData"
              :schema="schema"
              :ui-schema="uiSchema"
              label-width="100px"
              :columns="columns"
              @submit="doSubmit">
              <div slot="button" class="form-button-container">
                <el-button class="form-button" type="primary" native-type="submit">保存</el-button>
                <el-button class="form-button" @click="doCancel">返回</el-button>
              </div>
            </el-dynamic-form>
          </el-col>
        </el-row>
      </el-card>
    </el-grid-content>
  </div>
</template>
<style scoped>
  .form-button-container {
    text-align: center;
  }
</style>
<script>
import { Message } from 'setaria';
import Notice from '@/component/notice/index';

export default {
  props: {
    columns: {
      type: Number,
      default: 2,
    },
  },
  data() {
    return {
      schema: {
        title: 'A registration form',
        type: 'object',
        required: [
          'name',
          'gender',
        ],
        properties: {
          name: {
            type: 'string',
            title: '姓名',
            minLength: 2,
            maxLength: 6,
          },
          gender: {
            type: 'string',
            title: '性别',
            oneOf: [
              { const: 1, title: '男' },
              { const: 2, title: '女' },
            ],
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
            type: 'integer',
            title: '状态',
            oneOf: [
              { const: 1, title: '有效' },
              { const: 2, title: '无效' },
            ],
          },
        },
      },
      uiSchema: {
        gender: {
          'ui:widget': 'radio',
        },
      },
      formData: {
        name: '',
        gender: '',
        birth: '',
        mobile: '',
        activeFlag: '',
      },
    };
  },
  created() {
    this.doFetch();
  },
  methods: {
    doFetch() {
    },
    doSubmit() {
      Notice.showMessage(new Message('MBM001S', ['用户', '新增']));
      this.$router.forwardTo('EntitySearch');
    },
    doCancel() {
      this.$router.forwardTo('EntitySearch');
    },
  },
};
</script>
