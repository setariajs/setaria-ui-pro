<template>
  <el-form ref="form" :model="form" :rules="rules" label-position="right">
    <el-form-item
      label="任务名称"
      :label-width="itemLayout.labelWidth"
      :wrapper-width="itemLayout.wrapperWidth"
      prop="title">
      <el-input v-model="form.title"/>
    </el-form-item>
    <el-form-item
      label="开始时间"
      :label-width="itemLayout.labelWidth"
      :wrapper-width="itemLayout.wrapperWidth"
      prop="startDateTime">
      <el-date-picker
        class="start-datetime"
        type="datetime"
        v-model="form.startDateTime"
        value-format="yyyy-MM-dd HH:mm:ss"
        placeholder=""/>
    </el-form-item>
    <el-form-item
      label="任务负责人"
      :label-width="itemLayout.labelWidth"
      :wrapper-width="itemLayout.wrapperWidth"
      prop="owner.name">
      <el-select v-model="form.owner.name">
        <el-option
          v-for="user in userList"
          :key="user.name"
          :label="user.name"
          :value="user.name"/>
      </el-select>
    </el-form-item>
    <el-form-item
      label="任务描述"
      :label-width="itemLayout.labelWidth"
      :wrapper-width="itemLayout.wrapperWidth"
      prop="description">
      <el-input type="textarea" v-model="form.description"/>
    </el-form-item>
  </el-form>
</template>
<style lang="scss" scoped>
.start-datetime {
  &.el-date-editor {
    width: 100%;
  }
}
</style>
<script>
import { fetch } from '@/model/resource/User';
import { isNumber } from '@/model/util';

function getFormInitData() {
  return {
    title: '',
    description: '',
    startDateTime: null,
    owner: {
      name: '',
    },
  };
}

export default {
  name: 'TaskForm',
  props: {
    value: Object,
  },
  data() {
    return {
      form: {},
      ownerName: '',
      userList: [],
      itemLayout: {
        labelWidth: {
          span: 6,
        },
        wrapperWidth: {
          span: 13,
        },
      },
      rules: {
        title: [
          { required: true, message: '请输入任务名称！' },
        ],
        startDateTime: [
          { required: true, message: '请输入开始时间！' },
        ],
        'owner.name': [
          { required: true, message: '请选择任务负责人！' },
        ],
        description: [
          { min: 5, message: '请输入至少五个字符的任务描述！' },
        ],
      },
    };
  },
  created() {
    this.fetchUser();
    if (!isNumber(this.value.id)) {
      const formInitData = getFormInitData();
      Object.keys(formInitData).forEach((key) => {
        this.$set(this.form, key, formInitData[key]);
      });
    } else {
      this.form = this.value;
    }
  },
  watch: {
    form: {
      immediate: true,
      handler(val) {
        this.$emit('input', val);
      },
    },
  },
  methods: {
    async fetchUser() {
      const userList = await fetch();
      this.userList = userList;
    },
    validate() {
      return this.$refs.form.validate();
    },
  },
};
</script>
