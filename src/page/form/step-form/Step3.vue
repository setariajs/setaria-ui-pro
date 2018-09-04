<template>
  <div>
    <el-result
      class="step-result"
      type="success"
      title="操作成功"
      description="预计两小时内到账">
      <el-form
        slot="extra"
        :model="form"
        size="small"
        label-position="right">
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
          {{ form.amount }} 元
        </el-form-item>
      </el-form>
      <div slot="actions">
        <el-button type="primary" size="small" @click="handleFinish">再转一笔</el-button>
        <el-button size="small">查看账单</el-button>
      </div>
    </el-result>
  </div>
</template>
<script>
export default {
  name: 'Step3',
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
          span: 8,
        },
        wrapperWidth: {
          span: 16,
        },
      },
    };
  },
  methods: {
    handleFinish() {
      this.$router.push({
        name: 'StepFormInfo',
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.step-result {
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
}
</style>
