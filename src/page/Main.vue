<template>
  <el-container class="main">
    <el-aside :width="navMenuWidth">
      <div class="brand">
        <template v-if="!isCollapse">
          <router-link :to="{name: 'Analysis'}">
            <img :src="logoUrl"/>
            <h1>{{ appTitle }}</h1>
          </router-link>
        </template>
      </div>
      <el-menu
        class="nav-menu"
        :style="{width: navMenuWidth}"
        router
        :collapse="isCollapse"
        :default-active="activeMenu"
        background-color="#001529"
        text-color="#fff"
        active-text-color="#fff">
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
    </el-aside>
    <el-container class="container">
      <el-header class="header">
        <div class="header-right">
          <span class="action">
            <el-popover
              ref="remindPopover"
              placement="bottom"
              trigger="click"
              popper-class="remind-popover">
              <reminder
                @un-read-count-change="handleRemindUnReadCountChange">
              </reminder>
            </el-popover>
            <el-badge
              :value="remindUnReadCount"
              :max="99"
              class="remind"
              v-popover:remindPopover>
              <i class="fa fa-bell-o"></i>
            </el-badge>
          </span>
          <span class="action">
            <el-dropdown @command="handleUserCommandSelect">
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
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer height="48px">
        <span class="copyright">
          Setaria UI Pro ©2018 Created by Ray Han
        </span>
      </el-footer>
    </el-container>
  </el-container>
</template>
<style lang="scss" scoped>
  @import "../style/variables.scss";

  .main {
    width: 100%;
    height: 100%;

    .brand {
      height: 64px;
      line-height: 64px;
      background: #001529;
      font-family: 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif;
      padding-left: 24px;

      h1 {
        font-size: 20px;
        color: #bfcbd9;
        display: inline-block;
        vertical-align: middle;
        margin-bottom: 0;
      }

      img {
        display: inline-block;
        height: 32px;
        margin-right: 16px;
        vertical-align: middle;
      }
    }

    .nav-menu {
      height: 100%;

      .el-menu-item.is-active {
        background-color: $--color-primary !important;
      }

      .menu-icon {
        margin-right: 10px;
      }
    }

    .container {
      background-color: #f0f2f5;

      .header {
        height: 60px;
        line-height: 60px;
        padding: 0 12px 0 0;
        box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
        background-color:#fff;

        .header-right {
          float: right;
          height: 100%;

          .action {
            display: inline-block;
            height: 100%;
            cursor: pointer;
            padding: 0 12px;

            &:hover {
              background-color: $--color-primary-light-8;
            }

            .remind {
              display: inline;
            }

            .remind-popover {
              padding: 0 !important;
              width: 327px;
            }

            .el-dropdown-link {
              .fa {
                font-size: 18px;
              }
            }
          }
        }
      }

      .el-footer {
        line-height: 48px;
        text-align: center;

        .copyright {
          color: rgba(0, 0, 0, 0.45);
        }
      }
    }
  }
</style>

<script>
import Auth from '@/model/resource/Auth';
import { get, getConfigValue, getPublicResourceUrl } from '@/model/util';
import Reminder from './Reminder.vue';

const menuList = [
  {
    name: 'Dashboard',
    className: 'fa-tachometer',
    children: [
      {
        name: '分析页',
        link: '/dashboard/analysis',
      },
      {
        name: '工作台',
        link: '/dashboard/workplace',
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
];

export default {
  name: 'Main',
  activeMenu: '',
  data() {
    return {
      isCollapse: false,
      logoUrl: getPublicResourceUrl('logo.png'),
      menuList,
      remindUnReadCount: 8,
    };
  },
  computed: {
    appTitle() {
      return getConfigValue('TITLE');
    },
    /**
     * 菜单宽度
     */
    navMenuWidth() {
      return this.isCollapse ? '65px' : '260px';
    },
    /**
     * 用户名称
     * @return {String}
     */
    userName() {
      return get(Auth.getUserInfo(), 'name', '');
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler(val) {
        this.activeMenu = get(val, 'path', '');
      },
    },
  },
  methods: {
    /**
     * 提醒消息未读数量变更
     */
    handleRemindUnReadCountChange(val) {
      this.remindUnReadCount = val;
    },
    /**
     * 用户功能菜单项目点击事件处理
     */
    handleUserCommandSelect(command) {
      if (command === 'logout') {
        this.logout();
      }
    },
    /**
      * 注销按钮点击事件处理
      * @event
      */
    logout() {
      // 调用登出服务
      Auth.logout(get(Auth.getUserInfo(), 'user.userId')).then(() => {
        this.forwardToLogin();
      }).catch(() => {
        this.forwardToLogin();
      });
    },
    /**
     * 跳转至登录页面
     */
    forwardToLogin() {
      this.$router.push({ name: 'Login' });
    },
  },
  components: {
    Reminder,
  },
};
</script>
