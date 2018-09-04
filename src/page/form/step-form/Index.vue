<template>
  <div class="step-form">
    <el-page-header
      title="分步表单"
      content="将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。">
    </el-page-header>
    <el-grid-content>
      <el-card shadow="never">
        <el-row type="flex" justify="center">
          <el-col :xs="24" :sm="24" :md="24" :lg="18" :xl="12">
            <el-steps
              simple
              :active="currentStep"
              finish-status="finish">
              <el-step title="填写转账信息">
                <span slot="icon">
                  1
                </span>
              </el-step>
              <el-step title="确认转账信息">
                <span slot="icon">
                  2
                </span>
              </el-step>
              <el-step title="完成">
                <span slot="icon">
                  3
                </span>
              </el-step>
            </el-steps>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center" class="children">
          <el-col :span="24">
            <router-view></router-view>
          </el-col>
        </el-row>
      </el-card>
    </el-grid-content>
  </div>
</template>
<style lang="scss">
.step-form {
  .el-steps {
    margin-left: auto;
    margin-right: auto;
    background-color: transparent;

    .el-step {
      &.is-simple {
        .el-step__icon {
          font-size: 16px;
          width: 32px;
          height: 32px;
        }
        .el-step__head {
          &.is-process {
            .el-step__icon {
              background: #1890FF;
              color: #fff;
              border-color: #1890FF;
            }
          }
        }
        .el-step__main {
          .el-step__title {
            &.is-finish {
              color: rgba(0, 0, 0, 0.65);
            }
          }
        }
      }
    }
  }

  .children {
    margin-top: 30px;
  }
}
</style>
<script>
export default {
  name: 'StepForm',
  data() {
    return {
      currentStep: 0,
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler(val) {
        switch (val.name) {
          case 'StepFormInfo':
            this.currentStep = 0;
            break;
          case 'StepFormConfirm':
            this.currentStep = 1;
            break;
          case 'StepFormResult':
            this.currentStep = 2;
            break;
          default:
            this.currentStep = 0;
        }
      },
    },
  },
};
</script>
