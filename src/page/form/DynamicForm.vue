<template>
  <ume-card>
    <ume-row type="flex" justify="center">
      <ume-col :span="20">
        <ume-dynamic-form
          :model="formData"
          :schema="schema"
          :ui-schema="uiSchema"
          label-width="100px"
          :columns="columns"
          @submit="doSubmit">
          <div slot="button" class="form-button-container">
            <ume-button class="form-button" type="primary" native-type="submit">保存</ume-button>
            <ume-button class="form-button" @click="doCancel">返回</ume-button>
          </div>
        </ume-dynamic-form>
      </ume-col>
    </ume-row>
  </ume-card>
</template>
<style scoped>
  .form-button-container {
    text-align: center;
  }
</style>
<script>
import { Message } from 'setaria';
import { Notice } from '../../component';

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
      Notice.showMessage(new Message('MBM001I', ['用户', '新增']));
      this.$router.forwardTo('EntitySearch');
    },
    doCancel() {
      this.$router.forwardTo('EntitySearch');
    },
  },
};
</script>
