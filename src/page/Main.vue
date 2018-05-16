<template>
  <div class="system-layout system-layout-has-sider">
    <div class="system-layout-sider"
      :style="{overflowY: navMenuOverflow, flex: `0 0 ${navMenuWidth}`}">
      <div class="system-layout-sider-children">
        <div class="system-title-container">
          <span class="title">
            <template v-if="!isCollapse">{{ appTitle }}</template>
          </span>
        </div>
        <div class="nav-menu-collapse" @click="doToggleMenuCollapse">
          <i class="fa fa-angle-double-right" aria-hidden="true" v-if="isCollapse"></i>
          <i class="fa fa-angle-double-left" aria-hidden="true" v-else></i>
        </div>
        <el-menu
          class="system-nav-menu"
          :style="{width: navMenuWidth}"
          router
          :collapse="isCollapse"
          :default-active="activeMenu"
          background-color="#324157"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu v-for="(subMenu, index) in menuList" :key="index" :index="`${index}`">
            <template slot="title">
              <i class="menu-icon fa" :class="subMenu.className" aria-hidden="true"></i>
              <span>{{ subMenu.name }}</span>
            </template>
            <el-menu-item v-for="menu in subMenu.children" :index="menu.link" :key="menu.link">
              <span slot="title">{{ menu.name }}</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </div>
    <div class="system-layout system-layout-content" :style="{marginLeft: navMenuWidth}">
      <div class="system-layout-header">
        <span class="nav-container">
          <span class="nav-item">
            <el-popover
              ref="remindPopover"
              placement="bottom"
              trigger="click"
              popper-class="remind-popover"
              @show="doRemindPopoverShow">
              <el-tabs class="remind-popover-tabs" v-model="remindPopoverActiveName"
                v-loading="remindPopoverLoading"
                element-loading-text="拼命加载中"
                element-loading-spinner="el-icon-loading">
                <el-tab-pane
                  :label="`通知(${notificationArray.length})`"
                  name="notification">
                  <el-list v-if="notificationArray.length > 0">
                    <el-list-item
                      v-for="n in notificationArray" :key="n.title">
                      <el-list-item-meta
                        :title="n.title" :description="n.description" slot="meta">
                        <span slot="avatar">
                          <el-button circle size="small" :icon="n.type" :type="n.importance">
                          </el-button>
                        </span>
                      </el-list-item-meta>
                    </el-list-item>
                    <div slot="footer" class="remind-list-footer">
                      <span @click="doClearRemind('notification')">清空通知</span>
                    </div>
                  </el-list>
                  <div class="remind-no-data" v-else>
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
                <el-tab-pane :label="`消息(${messageArray.length})`" name="message">
                  <el-list v-if="messageArray.length > 0">
                    <el-list-item
                      v-for="(m, index) in messageArray"
                      :key="index">
                      <el-list-item-meta
                        :title="getRemindMessageTitle(m)"
                        :description="m.message" slot="meta">
                        <span slot="avatar">
                          <img :src="m.userImg" class="remind-tabs-message__user-icon"/>
                        </span>
                      </el-list-item-meta>
                    </el-list-item>
                    <div slot="footer" class="remind-list-footer">
                      <span @click="doClearRemind('message')">清空消息</span>
                    </div>
                  </el-list>
                  <div class="remind-no-data" v-else>
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
                <el-tab-pane :label="`待办(${todoArray.length})`" name="todo">
                  <el-list v-if="todoArray.length > 0">
                    <el-list-item
                      v-for="(t, index) in todoArray"
                      :key="index">
                      <el-list-item-meta
                        :description="t.description" slot="meta">
                        <div slot="title">
                          {{ t.title }}
                          <div style="float:right">
                            <el-tag size="small" :type="t.status === 'ready' ? 'info' : ''">
                              {{ t.status === 'ready' ? '未开始' : '进行中' }}
                            </el-tag>
                          </div>
                        </div>
                      </el-list-item-meta>
                    </el-list-item>
                    <div slot="footer" class="remind-list-footer">
                      <span @click="doClearRemind('todo')">清空待办</span>
                    </div>
                  </el-list>
                  <div class="remind-no-data" v-else>
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
            </el-popover>
            <el-badge :value="remindCount"
              :max="99" class="remind-badge" v-popover:remindPopover>
              <i class="fa fa-bell-o"></i>
            </el-badge>
          </span>
          <span class="nav-item">
            <el-dropdown @command="doUserCommandSelect">
              <span class="el-dropdown-link">
                <i class="fa fa-user-circle-o" aria-hidden="true"></i> {{ userName }}
              </span>
              <el-dropdown-menu
                slot="dropdown"
                class="user-command-option">
                <el-dropdown-item command="logout">退出系统</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </span>
        </span>
      </div>
      <div class="system-layout-page-content">
        <el-breadcrumb separator="/" class="system-bread-crumb">
          <el-breadcrumb-item
            v-for="crumb in breadCrumb"
            :to="crumb.path ? { path: crumb.path } : undefined"
            :key="crumb.name">
            {{ crumb.meta.title }}
          </el-breadcrumb-item>
        </el-breadcrumb>
        <router-view></router-view>
      </div>
      <div class="system-layout-footer">
        UME System ©2017 Created by UME Team
      </div>
    </div>
  </div>
</template>
<style>
  .system-layout {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-flex: 1;
    -webkit-flex: auto;
    -ms-flex: auto;
    flex: auto;
    background: #ececec;
  }
  .system-layout-has-sider {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
  }
  .system-layout-sider {
    -webkit-transition: all .15s cubic-bezier(.645,.045,.355,1);
    transition: all .15s cubic-bezier(.645,.045,.355,1);
    position: relative;
    background: #324157;
    min-width: 0;
    height: 100vh;
    position: fixed;
    left: 0px;
    z-index: 999;
  }
  .system-layout-content {
    overflow-x: hidden;
    height: 100vh;
  }
  .system-layout-header {
    background: #f1f1f1;
    padding: 0 10px;
    height: 64px;
    line-height: 64px;
  }
  .nav-container {
    float: right;
  }
  .nav-item + .nav-item {
    margin-left: 30px;
  }
  .nav-item .el-dropdown-link {
    font-size: 16px;
  }
  .nav-item .el-dropdown-link > i {
    font-size: 18px;
  }
  .user-command-option {
    font-size: 14px;
    top: 60px !important;
  }
  .system-layout-footer {
    padding: 24px 50px;
    color: rgba(0,0,0,.65);
    font-size: 12px;
  }
  .system-layout-footer, .system-layout-header {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
  }
  .system-layout-page-content {
    -webkit-box-flex: 1;
    -webkit-flex: auto;
    -ms-flex: auto;
    flex: auto;
    padding: 20px;
  }
  .system-title-container {
    height: 64px;
    line-height: 64px;
    text-align: center;
    background: #324157;
  }
  .system-logo {
    width: 40px;
    margin-top: -5px;
    vertical-align: middle;
  }
  .title {
    vertical-align: text-bottom;
    font-size: 18px;
    text-transform: uppercase;
    display: inline-block;
    color: #bfcbd9;
  }
  .system-bread-crumb {
    margin-bottom: 10px;
  }
  .nav-menu-collapse {
    text-align: center;
    color: #bfcbd9;
    font-size: 18px;
    background: #384558;
  }
  .nav-menu-collapse:hover {
    cursor: pointer;
    color: #e7f1fd;
  }
  .menu-icon {
    color: #fff;
    margin-right: 5px;
  }
  .remind-badge {
    line-height: 0;
  }
  .remind-popover {
    padding: 0 !important;
    width: 327px;
  }
  .remind-popover .el-tabs__header {
    margin-bottom: 0;
  }
  .remind-popover .el-tabs__nav-scroll,
  .remind-popover .el-list-item {
    padding-left: 16px;
    padding-right: 16px;
  }
  .remind-popover .el-list > * {
    cursor: pointer;
  }
  .remind-popover .el-list > .el-list-item:hover {
    background-color: #e6f7ff;
  }
  .remind-popover .el-list .remind-tabs-message__user-icon {
    height: 30px;
  }
  .remind-popover .el-list .remind-list-footer {
    text-align: center;
  }
  .remind-popover .el-list .el-list-item-meta-description {
    font-size: 13px !important;
  }
  .remind-popover .remind-no-data {
    text-align: center;
    display: flex;
    height: 200px;
    align-items: center;
  }
  .remind-popover .remind-no-data i {
    font-size: 48px;
    color: rgb(0, 0,0, 0.25);
  }
  .remind-popover .remind-no-data > div {
    flex: 1;
  }
</style>
<style lang="scss" scoped>
  .system-nav-menu {
    border-right: 1px solid #324157;
  }
</style>

<script>
import { config, Message, util } from 'setaria';
import { Notice } from '@/component';
import UserResource from '@/model/resource/UserResource';

export default {
  // 组件名称
  name: 'Dashboard',
  /**
     * 数据对象
     */
  data() {
    return {
      isCollapse: false,
      activeMenu: '',
      menuList: [
        {
          name: 'dashboard',
          className: 'fa-tachometer',
          children: [
            {
              name: '分析页',
              link: '/dashboard/analysis',
            },
          ],
        },
        {
          name: '列表页',
          className: 'fa-table',
          children: [
            {
              name: '动态查询列表',
              link: '/list/dynamic-list',
            },
          ],
        },
        {
          name: '表单页',
          className: 'fa-pencil-square-o',
          children: [
            {
              name: '基础表单',
              link: '/form/basic-form',
            },
            {
              name: '动态表单',
              link: '/form/dynamic-form',
            },
          ],
        },
      ],
      remindPopoverActiveName: 'notification',
      remindPopoverLoading: false,
      remindCount: 8,
      notificationArray: [],
      messageArray: [],
      todoArray: [],
    };
  },
  /**
     * 计算属性
     * @type {Object}
     */
  computed: {
    /**
       * 系统标题
       * @return {String}
       */
    appTitle() {
      return config.env.APP_TITLE;
    },
    /**
       * 用户名称
       * @return {String}
       */
    userName() {
      return util.get(UserResource.getUser(), 'user.userName', '');
    },
    /**
       * 面包屑
       * @return {Array}
       */
    breadCrumb() {
      return this.$route.matched.map((item, index) => {
        const ret = item;
        if (util.get(ret, 'meta.show', null) !== false) {
          if (ret.path === '' && index === 0) {
            ret.path = '/';
          }
        } else {
          delete ret.path;
        }
        return ret;
      });
    },
    navMenuWidth() {
      return this.isCollapse ? '65px' : '220px';
    },
    navMenuOverflow() {
      return this.isCollapse ? 'unset' : 'auto';
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler(val) {
        this.activeMenu = util.get(val, 'path', '');
      },
    },
  },
  /**
     * 组件事件处理函数
     * @type {Object}
     */
  methods: {
    /**
       * 用户功能菜单项目点击事件处理
       */
    doUserCommandSelect(command) {
      if (command === 'logout') {
        this.logout();
      }
    },
    /**
       * 收起／展开菜单按钮点击事件处理
       * @event
       */
    doToggleMenuCollapse() {
      this.isCollapse = !this.isCollapse;
    },
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
    },
    /**
     * 提醒弹出框显示事件处理
     */
    doRemindPopoverShow() {
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
    /**
       * 注销按钮点击事件处理
       * @event
       */
    logout() {
      // 调用登出服务
      UserResource.logout(UserResource.getUser().user.userId).then(() => {
        this.forwardToLogin();
      }).catch(() => {
        this.forwardToLogin();
      });
    },
    /**
       * 跳转至登录页面
       */
    forwardToLogin() {
      this.$router.forwardTo('Login');
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
  /**
     * 使用的子组件列表
     * @type {Object}
     */
  components: {
  },
};
</script>
