<template>
  <el-grid-content class="error">
    <el-card shadow="never">
      <el-result
        title="提交失败"
        type="error">
        <div slot="description">
          请核对并修改以下信息后，再重新提交。
        </div>
        <div slot="extra">
          <div class="section">
            <span>您提交的内容有如下错误：</span>
          </div>
          <div style="margin-bottom: 16px;">
            <i class="icon el-icon-circle-close-outline"></i>
            <span>您的账户已被冻结</span>
            <el-button type="text">
              立即解冻<i class="el-icon-arrow-right"></i>
            </el-button>
          </div>
          <div>
            <i class="icon el-icon-circle-close-outline"></i>
            <span>您的账户还不具备申请资格</span>
            <el-button type="text">
              立即升级<i class="el-icon-arrow-right"></i>
            </el-button>
          </div>
        </div>
        <div slot="actions" class="actions">
          <el-button type="primary" size="small">返回修改</el-button>
        </div>
      </el-result>
    </el-card>
  </el-grid-content>
</template>
<style lang="scss" scoped>
.error {
  .el-result {
    margin: 0 auto;
    margin-top: 48px;
    margin-bottom: 16px;
    text-align: center;
    width: 72%;

    .section {
      font-size: 16px;
      color: rgba(0, 0, 0, 0.85);
      font-weight: 500;
      margin-bottom: 16px;
    }

    .extra {
      .icon {
        color: rgb(245, 34, 45);
        margin-right: 8px;
        margin-bottom: 0;
      }

      .el-button {
        margin-left: 16px;
        padding-top: 0;
        padding-bottom: 0;
      }
    }

    .actions {
      margin-top: 32px;
    }
  }
}
</style>
