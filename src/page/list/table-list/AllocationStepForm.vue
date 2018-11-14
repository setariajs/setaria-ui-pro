<template>
  <div class="allocation-step-form">
    <el-steps :active="active" finish-status="success" simple class="steps">
      <el-step title="基本信息"></el-step>
      <el-step title="配置规则属性"></el-step>
      <el-step title="设定调度周期"></el-step>
    </el-steps>
    <component ref="stepForm" v-model="form" :is="componentId"/>
  </div>
</template>
<style lang="scss" scoped>
.allocation-step-form {
  .el-steps {
    margin-top: -24px;
    margin-bottom: 28px;
    background: transparent;

    .el-step {
      font-size: 14px;

      /deep/ {
        .el-step__title {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
<script>
export default {
  name: 'AllocationStepForm',
  props: {
    value: {
      required: true,
      type: Object,
    },
    currentStep: {
      required: true,
      type: Number,
    },
  },
  data() {
    return {
      active: 0,
      form: {
        name: '',
      },
    };
  },
  computed: {
    componentId() {
      let ret = '';
      switch (this.active) {
        case 0:
          ret = 'basic';
          break;
        case 1:
          ret = 'ruleAttribute';
          break;
        case 2:
          ret = 'frequency';
          break;
        default:
          ret = 'basic';
      }
      return ret;
    },
  },
  watch: {
    currentStep: {
      immediate: true,
      handler(val) {
        // 返回至上一步的场合，直接返回
        if (this.active > val) {
          this.active = val < 0 ? 0 : val;
        } else if (this.active !== val) {
          this.$refs.stepForm.validate()
            .then(() => {
              this.active = val;
              if (val === 3) {
                this.$emit('complete');
              }
            })
            .catch(() => {
              this.active = val - 1;
              this.$emit('update:currentStep', val - 1);
            });
        }
      },
    },
    form: {
      deep: true,
      handler(val) {
        this.$emit('input', val);
      },
    },
  },
  created() {
    this.form = this.value;
  },
  methods: {
    validate() {
    },
  },
  components: {
    basic: {
      props: {
        value: {
          required: true,
          type: Object,
        },
      },
      data() {
        return {
          form: {},
          rules: {
            name: [
              { required: true, message: '请输入规则名称' },
            ],
            desc: [
              { required: true, message: '请输入至少五个字符的规则描述！' },
              { min: 5, message: '请输入至少五个字符的规则描述！' },
            ],
          },
          itemLayout: {
            labelWidth: {
              span: 7,
            },
            wrapperWidth: {
              span: 12,
            },
          },
        };
      },
      watch: {
        value: {
          immediate: true,
          handler(val = {}) {
            this.form = val;
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
      render() {
        const { form, itemLayout, rules } = this;
        return (
          <el-form ref="form" rules={rules} model={form} label-position="right" size="small">
            <el-form-item
              label="规则名称"
              prop="name"
              label-width={itemLayout.labelWidth}
              wrapper-width={itemLayout.wrapperWidth}>
              <el-input value={form.name} onInput={(val) => { form.name = val; }}/>
            </el-form-item>
            <el-form-item
              label="规则描述"
              prop="desc"
              label-width={itemLayout.labelWidth}
              wrapper-width={itemLayout.wrapperWidth}>
              <el-input type="textarea" value={form.desc} onInput={(val) => { form.desc = val; }}/>
            </el-form-item>
          </el-form>
        );
      },
    },
    ruleAttribute: {
      props: {
        value: {
          required: true,
          type: Object,
        },
      },
      data() {
        return {
          form: {},
          itemLayout: {
            labelWidth: {
              span: 7,
            },
            wrapperWidth: {
              span: 12,
            },
          },
        };
      },
      watch: {
        value: {
          immediate: true,
          handler(val = {}) {
            this.form = val;
          },
        },
        form: {
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
          return new Promise((resolve) => {
            resolve();
          });
        },
      },
      render() {
        const { form, itemLayout } = this;
        return (
          <el-form ref="form" model={form} label-position="right" size="small">
            <el-form-item
              label="监控对象"
              prop="target"
              label-width={itemLayout.labelWidth}
              wrapper-width={itemLayout.wrapperWidth}>
              <el-select value={form.target} onInput={(val) => { form.target = val; }}>
                <el-option label="表一" value="1"/>
                <el-option label="表二" value="2"/>
              </el-select>
            </el-form-item>
            <el-form-item
              label="规则模板"
              prop="template"
              label-width={itemLayout.labelWidth}
              wrapper-width={itemLayout.wrapperWidth}>
              <el-select value={form.template} onInput={(val) => { form.template = val; }}>
                <el-option label="规则模板一" value="1"/>
                <el-option label="规则模板二" value="2"/>
              </el-select>
            </el-form-item>
            <el-form-item
              label="规则类型"
              prop="type"
              label-width={itemLayout.labelWidth}
              wrapper-width={itemLayout.wrapperWidth}>
              <el-radio-group value={form.type} onInput={(val) => { form.type = val; }}>
                <el-radio label="1">强</el-radio>
                <el-radio label="2">弱</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-form>
        );
      },
    },
    frequency: {
      props: {
        value: {
          required: true,
          type: Object,
        },
      },
      data() {
        return {
          form: {},
          itemLayout: {
            labelWidth: {
              span: 7,
            },
            wrapperWidth: {
              span: 12,
            },
          },
          rules: {
            startTime: [
              { required: true, message: '请选择开始时间！' },
            ],
          },
        };
      },
      watch: {
        value: {
          immediate: true,
          handler(val = {}) {
            this.form = val;
          },
        },
        form: {
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
      render() {
        const { form, itemLayout, rules } = this;
        return (
          <el-form ref="form" rules={rules} model={form} label-position="right" size="small">
            <el-form-item
              label="开始时间"
              prop="startTime"
              label-width={itemLayout.labelWidth}
              wrapper-width={itemLayout.wrapperWidth}
              value-format="yyyy-MM-dd HH:mm:ss">
              <el-date-picker
                type="datetime"
                value={form.startTime}
                onInput={(val) => { form.startTime = val; }}
                style={{ width: '100%' }}/>
            </el-form-item>
            <el-form-item
              label="调度周期"
              prop="frequency"
              label-width={itemLayout.labelWidth}
              wrapper-width={itemLayout.wrapperWidth}>
              <el-select value={form.frequency} onInput={(val) => { form.frequency = val; }}>
                <el-option label="月" value="1"/>
                <el-option label="周" value="2"/>
              </el-select>
            </el-form-item>
          </el-form>
        );
      },
    },
  },
};
</script>
