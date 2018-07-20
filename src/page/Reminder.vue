<template>
  <el-tabs class="remind-popover-tabs"
           v-model="remindPopoverActiveName"
           v-loading="remindPopoverLoading"
           element-loading-text="拼命加载中"
           element-loading-spinner="el-icon-loading">
    <el-tab-pane :label="`通知(${notificationArray.length})`"
                 name="notification">
      <el-list v-if="notificationArray.length > 0">
        <el-list-item v-for="n in notificationArray"
                      :key="n.title">
          <el-list-item-meta :title="n.title"
                             :description="n.description"
                             slot="meta">
            <span slot="avatar">
              <el-button circle
                         size="small"
                         :icon="n.type"
                         :type="n.importance">
              </el-button>
            </span>
          </el-list-item-meta>
        </el-list-item>
        <div slot="footer"
             class="remind-list-footer">
          <span @click="doClearRemind('notification')">清空通知</span>
        </div>
      </el-list>
      <div class="remind-no-data"
           v-else>
        <div>
          <div>
            <i class="el-icon-bell"></i>
          </div>
          <div>
            您已查看所有通知
          </div>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane :label="`消息(${messageArray.length})`"
                 name="message">
      <el-list v-if="messageArray.length > 0">
        <el-list-item v-for="(m, index) in messageArray"
                      :key="index">
          <el-list-item-meta :title="getRemindMessageTitle(m)"
                             :description="m.message"
                             slot="meta">
            <span slot="avatar">
              <img :src="m.userImg"
                   class="remind-tabs-message__user-icon" />
            </span>
          </el-list-item-meta>
        </el-list-item>
        <div slot="footer"
             class="remind-list-footer">
          <span @click="doClearRemind('message')">清空消息</span>
        </div>
      </el-list>
      <div class="remind-no-data"
           v-else>
        <div>
          <div>
            <i class="el-icon-message"></i>
          </div>
          <div>
            您已查看所有消息
          </div>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane :label="`待办(${todoArray.length})`"
                 name="todo">
      <el-list v-if="todoArray.length > 0">
        <el-list-item v-for="(t, index) in todoArray"
                      :key="index">
          <el-list-item-meta :description="t.description"
                             slot="meta">
            <div slot="title">
              {{ t.title }}
              <div style="float:right">
                <el-tag size="small"
                        :type="t.status === 'ready' ? 'info' : ''">
                  {{ t.status === 'ready' ? '未开始' : '进行中' }}
                </el-tag>
              </div>
            </div>
          </el-list-item-meta>
        </el-list-item>
        <div slot="footer"
             class="remind-list-footer">
          <span @click="doClearRemind('todo')">清空待办</span>
        </div>
      </el-list>
      <div class="remind-no-data"
           v-else>
        <div>
          <div>
            <i class="el-icon-view"></i>
          </div>
          <div>
            您已完成所有待办事项
          </div>
        </div>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>
<style lang="scss">
.remind-popover-tabs {
  .el-tabs__header {
    margin-bottom: 0;
  }

  .el-tabs__nav-scroll,
  .el-list-item {
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>
<style lang="scss" scoped>
.remind-popover-tabs {
  .el-list{
    & > * {
      cursor: pointer;
    }

    & > .el-list-item:hover {
      background-color: #e6f7ff;
    }

    .remind-tabs-message__user-icon {
      height: 30px;
    }

    .remind-list-footer {
      text-align: center;
      cursor: pointer;
    }

    .el-list-item-meta-description {
      font-size: 13px !important;
    }
  }

  .remind-no-data {
    text-align: center;
    display: flex;
    height: 200px;
    align-items: center;

    i {
      font-size: 48px;
      color: rgba(0, 0,0, 0.25);
    }

    & > div {
      flex: 1;
    }
  }
}
</style>

<script>
import { Message } from 'setaria';
import Notice from '@/component/notice/index';

export default {
  name: 'Reminder',
  data() {
    return {
      remindPopoverActiveName: 'notification',
      remindPopoverLoading: false,
      remindCount: 8,
      notificationArray: [],
      messageArray: [],
      todoArray: [],
    };
  },
  mounted() {
    this.remindPopoverLoading = true;
    setTimeout(() => {
      this.notificationArray = [
        {
          title: '你收到了12份新周报',
          description: '1周前',
          type: 'el-icon-message',
          importance: 'danger',
        },
        {
          title: '这种模板可区分多种通知类型',
          description: '1周前',
          type: 'el-icon-circle-plus',
          importance: 'primary',
        },
        {
          title: '左侧图标用于区分不同类型',
          description: '1周前',
          type: 'el-icon-star-off',
          importance: 'info',
        },
      ];
      this.messageArray = [
        {
          userImg: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Wikipedia_User-ICON_byNightsight.png',
          userName: '杨颖',
          type: 'comment',
          message: '描述信息描述信息描述信息',
          date: '1个月前',
        },
        {
          userImg: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Wikipedia_User-ICON_byNightsight.png',
          userName: '吴迪',
          type: 'reply',
          message: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
          date: '1个月前',
        },
        {
          userImg: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Wikipedia_User-ICON_byNightsight.png',
          userName: '系统管理员',
          type: 'send',
          title: '标题',
          message: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
          date: '1个月前',
        },
      ];
      this.todoArray = [
        {
          title: '任务名称',
          status: 'ready',
          description: '任务需要在 2018-05-20 前启动',
        },
        {
          title: '版本发布',
          status: 'on-going',
          description: '需要在 2018-05-20 前完成代码变更任务',
        },
      ];
      this.remindPopoverLoading = false;
    }, 2000);
  },
  methods: {
    /**
     * 提醒清空按钮点击事件处理
     */
    doClearRemind(type) {
      let remindTypeLabel = '';
      let count = this.remindCount;
      if (type === 'notification') {
        remindTypeLabel = '通知';
        count -= this.notificationArray.length;
        this.notificationArray = [];
      } else if (type === 'message') {
        remindTypeLabel = '消息';
        count -= this.messageArray.length;
        this.messageArray = [];
      } else if (type === 'todo') {
        remindTypeLabel = '待办';
        count -= this.todoArray.length;
        this.todoArray = [];
      }
      this.remindCount = count < 0 ? 0 : count;
      Notice.showMessage({
        type: 'success',
        message: new Message('MBM005S', [remindTypeLabel]).getMessage(),
      });
      this.emitUnReadCountChange();
    },
    emitUnReadCountChange() {
      this.$emit('un-read-count-change', this.remindCount);
    },
    /**
     * 根据通知类型取得对应的图标样式
     */
    getNotificationAvatarIconClass(val) {
      const ret = [];
      // avatar icon
      switch (val.type) {
        case 'message':
          ret.push('el-icon-message');
          break;
        case 'bookmark':
          ret.push('el-icon-star-on');
          break;
        default:
          ret.push('el-icon-info');
      }
      return ret;
    },
    getRemindMessageTitle(val) {
      if (val.title) {
        return val.title;
      }
      let actDescription = '';
      if (val.type === 'reply') {
        actDescription = ' 回复了你';
      } else if (val.type === 'comment') {
        actDescription = ' 评论了你';
      }
      return `${val.userName} ${actDescription}`;
    },
  },
};
</script>
