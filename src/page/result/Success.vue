<template>
  <el-grid-content class="success">
    <el-card shadow="never">
      <el-result
        title="提交成功">
        <div slot="description">
          提交结果页用于反馈一系列操作任务的处理结果， 如果仅是简单操作，使用 Message 全局提示反馈即可。
          本文字区域可以展示简单的补充说明，如果有类似展示 “单据”的需求，
          下面这个灰色区域可以呈现比较复杂的内容。
        </div>
        <div slot="extra">
          <div class="project-name">
            <span>项目名称</span>
          </div>
          <el-row class="project-description">
            <el-col :xs="24" :sm="12" :md="12" :lg="8">
              <span class="label">
                项目 ID：
              </span>
              23421
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="7">
              <span class="label">
                负责人：
              </span>
              曲丽丽
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="9">
              <span class="label">
                生效时间：
              </span>
              2016-12-12 ~ 2017-12-12
            </el-col>
          </el-row>
          <el-steps
            :active="2"
            align-center
            class="project-process"
            process-status="wait">
            <el-step title="创建项目">
              <div slot="description" class="step-description">
                <div>曲丽丽</div>
                <div>2016-12-12 12:32</div>
              </div>
            </el-step>
            <el-step title="部门初审">
              <div slot="description" class="step-description">
                <div>周毛毛</div>
                <div>
                  <el-button type="text" size="small">
                    催一下
                  </el-button>
                </div>
              </div>
            </el-step>
            <el-step title="财务复核">
            </el-step>
            <el-step title="完成">
            </el-step>
          </el-steps>
        </div>
        <div slot="actions" class="actions">
          <el-button type="primary" size="small">返回列表</el-button>
          <el-button size="small">查看项目</el-button>
          <el-button size="small">打印</el-button>
        </div>
      </el-result>
    </el-card>
  </el-grid-content>
</template>
<style lang="scss" scoped>
.success {
  .el-result {
    margin: 0 auto;
    margin-top: 48px;
    margin-bottom: 16px;
    text-align: center;
    width: 72%;

    .project-name {
      font-size: 16px;
      color: rgba(0, 0, 0, 0.85);
      font-weight: 500;
      margin-bottom: 20px;
    }

    .project-description {
      margin-bottom: 16px;
    }

    .project-process {
      .step-description {
        color: rgba(0, 0, 0, 0.45);

        .el-button {
          padding-top: 0;
          padding-bottom: 0;
        }
      }
    }

    .label {
      color: rgba(0, 0, 0, 0.85);
    }

    .actions {
      margin-top: 32px;
    }
  }
}
</style>
<style lang="scss">
.success {
  .project-process {
    .el-step {
      .el-step__main {
        .el-step__title {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.65);
        }
      }
    }
  }
}
</style>
