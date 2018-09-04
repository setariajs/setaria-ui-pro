<template>
  <el-form
    class="step-form"
    :rules="rules"
    :model="form"
    size="small"
    label-position="right"
    @submit="handleNext">
    <el-alert
      title="确认转账后，资金将直接打入对方账户，无法退回。"
      closable
      show-icon/>
    <el-form-item
      label="付款账户："
      :label-width="itemLayout.labelWidth"
      :wrapper-width="itemLayout.wrapperWidth">
      {{ form.payAccount }}
    </el-form-item>
    <el-form-item
      label="收款账户："
      :label-width="itemLayout.labelWidth"
      :wrapper-width="itemLayout.wrapperWidth">
      {{ form.receiverAccount }}
    </el-form-item>
    <el-form-item
      label="收款人姓名："
      :label-width="itemLayout.labelWidth"
      :wrapper-width="itemLayout.wrapperWidth">
      {{ form.receiverName }}
    </el-form-item>
    <el-form-item
      label="转账金额："
      prop="amount"
      :label-width="itemLayout.labelWidth"
      :wrapper-width="itemLayout.wrapperWidth">
      {{ form.amount }}（{{ digitUppercase(form.amount) }}）
    </el-form-item>
    <el-divider/>
    <el-form-item
      label="支付密码"
      prop="payPassword"
      :label-width="itemLayout.labelWidth"
      :wrapper-width="itemLayout.wrapperWidth">
      <el-input type="password" v-model="form.payPassword"/>
    </el-form-item>
    <el-form-item
      label=""
      :label-width="{}"
      :wrapper-width="{ span: 18, offset: 6 }">
      <el-button type="primary" native-type="submit">提交</el-button>
      <el-button  @click="handlePrev">上一步</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { digitUppercase } from '@/model/util';

export default {
  name: 'Step2',
  data() {
    const getValueFromStore = key => this.$store.state.stepForm.step[key] || null;
    return {
      form: {
        payAccount: getValueFromStore('payAccount'),
        receiverType: '1',
        receiverAccount: getValueFromStore('receiverAccount'),
        receiverName: getValueFromStore('receiverName'),
        amount: getValueFromStore('amount'),
        payPassword: '123456',
      },
      itemLayout: {
        labelWidth: {
          span: 6,
        },
        wrapperWidth: {
          span: 18,
        },
      },
      rules: {
        payPassword: [
          { required: true, message: '需要支付密码才能进行支付' },
        ],
      },
    };
  },
  methods: {
    handlePrev() {
      this.$router.push({
        name: 'StepFormInfo',
      });
    },
    handleNext() {
      this.$router.push({
        name: 'StepFormResult',
      });
    },
    digitUppercase(val) {
      return digitUppercase(val);
    },
  },
};
</script>
<style lang="scss" scoped>
.step-form {
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;

  .el-alert {
    margin-bottom: 24px;
  }
}
</style>
