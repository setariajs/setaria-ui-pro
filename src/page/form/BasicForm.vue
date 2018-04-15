<template>
  <ume-card>
    <ume-form ref="form"
      :model="form" :rules="rules" label-width="80px" @submit="onSubmit" class="form">
      <ume-form-item label="活动名称" prop="name">
        <ume-input v-model="form.name"></ume-input>
      </ume-form-item>
      <ume-form-item label="活动区域" prop="region">
        <ume-select v-model="form.region" placeholder="请选择活动区域">
          <ume-option label="区域一" value="shanghai"></ume-option>
          <ume-option label="区域二" value="beijing"></ume-option>
        </ume-select>
      </ume-form-item>
      <ume-form-item label="活动时间" required>
        <ume-col :span="11">
          <ume-form-item prop="date1">
            <ume-date-picker
              type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;">
            </ume-date-picker>
          </ume-form-item>
        </ume-col>
        <ume-col class="line" :span="2">-</ume-col>
        <ume-col :span="11">
          <ume-form-item prop="date2">
            <ume-time-picker
              type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;">
            </ume-time-picker>
          </ume-form-item>
        </ume-col>
      </ume-form-item>
      <ume-form-item label="即时配送" prop="delivery">
        <ume-switch v-model="form.delivery"></ume-switch>
      </ume-form-item>
      <ume-form-item label="活动性质" prop="type">
        <ume-checkbox-group v-model="form.type">
          <ume-checkbox label="美食/餐厅线上活动" name="type"></ume-checkbox>
          <ume-checkbox label="地推活动" name="type"></ume-checkbox>
          <ume-checkbox label="线下主题活动" name="type"></ume-checkbox>
          <ume-checkbox label="单纯品牌曝光" name="type"></ume-checkbox>
        </ume-checkbox-group>
      </ume-form-item>
      <ume-form-item label="特殊资源" prop="resource">
        <ume-radio-group v-model="form.resource">
          <ume-radio label="线上品牌商赞助"></ume-radio>
          <ume-radio label="线下场地免费"></ume-radio>
        </ume-radio-group>
      </ume-form-item>
      <ume-form-item label="活动形式">
        <ume-input type="textarea" v-model="form.desc"></ume-input>
      </ume-form-item>
      <ume-form-item>
        <ume-button type="primary" native-type="submit">立即创建</ume-button>
        <ume-button>取消</ume-button>
      </ume-form-item>
    </ume-form>
  </ume-card>
</template>
<style scoped>
  .form {
    width: 40%;
    margin: 0 auto;
  }
  .form .el-checkbox+.el-checkbox {
    margin-left: 0;
  }
  .form .el-checkbox-group .el-checkbox {
    width: 160px;
  }
  .line {
    text-align: center;
  }
</style>
<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
      rules: {
        name: [
          {
            required: true,
            message: '请输入活动名称',
            trigger: 'blur',
          },
          {
            min: 3,
            max: 5,
            message: '长度在 3 到 5 个字符',
            trigger: 'blur',
          },
        ],
        region: [
          {
            required: true,
            message: '请选择活动区域',
            trigger: 'change',
          },
        ],
        date1: [
          {
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change',
          },
        ],
        date2: [
          {
            type: 'date',
            required: true,
            message: '请选择时间',
            trigger: 'change',
          },
        ],
        type: [
          {
            type: 'array',
            required: true,
            message: '请至少选择一个活动性质',
            trigger: 'change',
          },
        ],
        resource: [
          {
            required: true,
            message: '请选择活动资源',
            trigger: 'change',
          },
        ],
        desc: [
          {
            required: true,
            message: '请填写活动形式',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
        return true;
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
