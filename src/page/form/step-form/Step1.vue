<template>
  <div class="step-info">
    <el-form
      class="step-form"
      :rules="rules"
      :model="form"
      size="small"
      label-position="right"
      @submit="handleNext">
      <el-form-item
        label="付款账户："
        prop="payAccount"
        :label-width="itemLayout.labelWidth"
        :wrapper-width="itemLayout.wrapperWidth">
        <el-select placeholder="请选择付款账户" v-model="form.payAccount">
          <el-option label="setaria@alipay.com" value="setaria@alipay.com"></el-option>
          <el-option label="ant-design@alipay.com" value="ant-design@alipay.com"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item
        label="收款账户："
        prop="receiverAccount"
        :label-width="itemLayout.labelWidth"
        :wrapper-width="itemLayout.wrapperWidth">
        <el-input v-model="form.receiverAccount">
          <el-select
            slot="prepend"
            placeholder="请选择付款账户"
            v-model="form.receiverType"
            style="width: 100px;">
            <el-option label="银联卡" value="1"></el-option>
            <el-option label="支付宝" value="2"></el-option>
          </el-select>
        </el-input>
      </el-form-item>
      <el-form-item
        label="收款人姓名："
        prop="receiverName"
        :label-width="itemLayout.labelWidth"
        :wrapper-width="itemLayout.wrapperWidth">
        <el-input v-model="form.receiverName"/>
      </el-form-item>
      <el-form-item
        label="转账金额："
        prop="amount"
        :label-width="itemLayout.labelWidth"
        :wrapper-width="itemLayout.wrapperWidth">
        <el-input v-model="form.amount">
          <template slot="prepend">￥</template>
        </el-input>
      </el-form-item>
      <el-form-item
        label=""
        :label-width="{}"
        :wrapper-width="{ span: 18, offset: 6 }">
        <el-button type="primary" native-type="submit">下一步</el-button>
      </el-form-item>
    </el-form>
    <el-divider/>
    <div class="desc">
      <h3>说明</h3>
      <h4>转账到支付宝账户</h4>
      <p>
        如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
      </p>
      <h4>转账到银行卡</h4>
      <p>
        如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Step1',
  data() {
    const getValueFromStore = key => this.$store.state.stepForm.step[key] || null;
    return {
      form: {
        payAccount: getValueFromStore('payAccount'),
        receiverType: '1',
        receiverAccount: getValueFromStore('receiverAccount'),
        receiverName: getValueFromStore('receiverName'),
        amount: getValueFromStore('amount'),
      },
      rules: {
        payAccount: [
          { required: true, message: '请选择付款账户' },
        ],
        receiverType: [
          { required: true, message: '请选择收款方式' },
        ],
        receiverAccount: [
          { required: true, message: '请输入收款账户' },
        ],
        receiverName: [
          { required: true, message: '请输入收款人姓名' },
        ],
        amount: [
          { required: true, message: '请输入转账金额' },
          {
            pattern: /^(\d+)((?:\.\d+)?)$/,
            message: '请输入合法金额数字',
          },
        ],
      },
      itemLayout: {
        labelWidth: {
          span: 6,
        },
        wrapperWidth: {
          span: 18,
        },
      },
    };
  },
  methods: {
    handleNext() {
      this.form.amount = parseFloat(this.form.amount);
      this.$store.commit('stepForm/updateStep', this.form);
      this.$router.push({
        name: 'StepFormConfirm',
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~setaria-ui/packages/theme-chalk/src/common/var";

.step-info {
  .step-form {
    margin-left: auto;
    margin-right: auto;
    max-width: 500px;
  }

  .desc {
    padding: 0 56px;
    color: $--color-text-secondary;

    h3 {
      font-size: 16px;
      margin: 0 0 12px 0;
      color: $--color-text-secondary;
      line-height: 32px;
    }
    h4 {
      margin: 0 0 4px 0;
      color: $--color-text-secondary;
      font-size: 14px;
      line-height: 22px;
    }
    p {
      margin-top: 0;
      margin-bottom: 12px;
      line-height: 22px;
    }
  }
}
</style>
