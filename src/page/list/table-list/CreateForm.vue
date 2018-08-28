<template>
  <el-form ref="form" :model="form" :rules="rules" label-position="right">
    <el-form-item
      label="描述"
      :label-width="itemLayout.labelWidth"
      :wrapper-width="itemLayout.wrapperWidth"
      prop="desc">
      <el-input v-model="form.desc"/>
    </el-form-item>
  </el-form>
</template>
<script>
function getFormInitData() {
  return {
    desc: '',
  };
}

export default {
  name: 'CreateForm',
  props: {
    value: Object,
  },
  data() {
    return {
      form: {},
      itemLayout: {
        labelWidth: {
          span: 6,
        },
        wrapperWidth: {
          span: 13,
        },
      },
      rules: {
        desc: [
          { required: true, message: '请输入至少五个字符的规则描述！' },
          { min: 5, message: '请输入至少五个字符的规则描述！' },
        ],
      },
    };
  },
  created() {
    const formInitData = getFormInitData();
    Object.keys(formInitData).forEach((key) => {
      this.$set(this.form, key, formInitData[key]);
    });
  },
  watch: {
    form: {
      immediate: true,
      deep: true,
      handler(val) {
        this.$emit('input', val);
      },
    },
  },
  methods: {
    /**
     * 表单校验
     * @public
     */
    validate() {
      return this.$refs.form.validate();
    },
  },
};
</script>
