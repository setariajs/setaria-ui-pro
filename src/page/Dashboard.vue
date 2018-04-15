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
        <ume-menu
          :style="{width: navMenuWidth}"
          router
          :collapse="isCollapse"
          :default-active="activeMenu"
          background-color="#324157"
          text-color="#fff"
          active-text-color="#ffd04b">
          <ume-submenu v-for="(subMenu, index) in menuList" :key="index" :index="`${index}`">
            <template slot="title">
              <i class="menu-icon fa" :class="subMenu.className" aria-hidden="true"></i>
              <span>{{ subMenu.name }}</span>
            </template>
            <ume-menu-item v-for="menu in subMenu.children" :index="menu.link" :key="menu.link">
              <span slot="title">{{ menu.name }}</span>
            </ume-menu-item>
          </ume-submenu>
        </ume-menu>
      </div>
    </div>
    <div class="system-layout system-layout-content" :style="{marginLeft: navMenuWidth}">
      <div class="system-layout-header">
        <span class="nav-container">
          <span class="nav-item">
            <ume-dropdown @command="doUserCommandSelect">
              <span class="el-dropdown-link">
                <i class="fa fa-user-circle-o" aria-hidden="true"></i> {{ userName }}
              </span>
              <ume-dropdown-menu
                slot="dropdown"
                class="user-command-option">
                <ume-dropdown-item command="logout">退出系统</ume-dropdown-item>
              </ume-dropdown-menu>
            </ume-dropdown>
          </span>
        </span>
      </div>
      <div class="system-layout-page-content">
        <ume-breadcrumb separator="/" class="system-bread-crumb">
          <ume-breadcrumb-item
            v-for="crumb in breadCrumb"
            :to="crumb.path ? { path: crumb.path } : undefined"
            :key="crumb.name">
            {{ crumb.meta.title }}
          </ume-breadcrumb-item>
        </ume-breadcrumb>
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
    margin-left: 10px;
  }
  .nav-item .el-dropdown-link {
    font-size: 16px;
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
    padding: 10px;
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
</style>
<script>
import { config, util } from 'setaria';
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
  },
  /**
     * 使用的子组件列表
     * @type {Object}
     */
  components: {
  },
};
</script>
