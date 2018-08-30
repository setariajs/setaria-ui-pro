<template>
  <el-container class="main">
    <el-aside :width="asideWidth" class="aside">
      <div class="brand">
        <template>
          <router-link :to="{name: 'Analysis'}">
            <img :src="logoUrl"/>
            <h1 v-if="!isMenuCollapse">{{ appTitle }}</h1>
          </router-link>
        </template>
      </div>
      <el-menu
        class="nav-menu"
        :style="{
          width: asideWidth
        }"
        router
        :collapse="isMenuCollapse"
        :default-active="activeMenu"
        background-color="#001529"
        text-color="rgba(255, 255, 255, 0.65)"
        active-text-color="#fff">
        <el-submenu v-for="(subMenu, index) in menuList" :key="index" :index="`${index}`">
          <template slot="title">
            <i class="menu-icon fa" :class="subMenu.icon" aria-hidden="true"></i>
            <span>{{ subMenu.name }}</span>
          </template>
          <el-menu-item
            class="nav-menu-item"
            v-for="menu in subMenu.children"
            :index="menu.link"
            :key="menu.link">
            <span slot="title">{{ menu.name }}</span>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container class="container">
      <el-header>
        <div class="action menu-fold" @click="handleMenuFold">
          <i :class="{
            'el-icon-d-arrow-left': !isMenuCollapse,
            'el-icon-d-arrow-right': isMenuCollapse,
          }"></i>
        </div>
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
<style lang="scss">
@import "../style/variables.scss";

.remind-popover {
  padding: 0 !important;
  width: 327px;
}
.main {
  .nav-menu {
    &.el-menu--collapse {
      .el-submenu__title {
        text-align: center;
        font-size: 18px;
      }
    }
  }
}
.nav-menu-item.is-active {
  background-color: $--color-primary !important;
}
</style>

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

  .aside {
    transition: width .2s;

    .nav-menu {
      height: 100%;

      &.el-menu {
        .el-submenu.is-active {
          .el-submenu__title {
            i, span {
              color: #fff;
            }
          }
        }
      }

      .el-menu-item.is-active {
        background-color: $--color-primary !important;
      }

      .menu-icon {
        margin-right: 10px;
      }
    }
  }

  .container {
    background-color: #f0f2f5;

    .el-header {
      height: 60px;
      line-height: 60px;
      padding: 0 12px 0 0;
      box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
      background-color:#fff;

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

        .el-dropdown-link {
          .fa {
            font-size: 18px;
          }
        }
      }

      .menu-fold {
        display: inline-block;
        padding: 0 20px;
      }

      .header-right {
        float: right;
        height: 100%;
      }
    }

    .el-main {
      padding: 0;
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
import debounce from 'throttle-debounce/debounce';
import { addResizeListener, removeResizeListener } from '@/component/resize-event';
import route from '@/config/route';
import Auth from '@/model/resource/Auth';
import { get, getConfigValue, getPublicResourceUrl } from '@/model/util';
import Reminder from './Reminder.vue';

function convertRouteToMenuItem({ children, meta, path }, parentPath) {
  const link = parentPath.indexOf('/') !== parentPath.length - 1
    ? `${parentPath}/${path}` : `${parentPath}${path}`;
  const retChildren = [];
  if (children && children.length > 0) {
    children.forEach(item => retChildren.push(convertRouteToMenuItem(item, link)));
  }
  return {
    name: meta.title,
    link,
    icon: meta.icon || '',
    children: retChildren,
  };
}

export default {
  name: 'Main',
  activeMenu: '',
  data() {
    return {
      logoUrl: getPublicResourceUrl('logo.png'),
      remindUnReadCount: 8,
      isMenuCollapse: false,
    };
  },
  computed: {
    asideWidth() {
      return this.isMenuCollapse ? '80px' : '260px';
    },
    appTitle() {
      return getConfigValue('TITLE');
    },
    menuList() {
      const mainRoute = route.routes.find(item => item.name === 'Main');
      const ret = mainRoute.children.map(item => convertRouteToMenuItem(item, mainRoute.path));
      return ret;
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
  created() {
    this.debounceResize = debounce(200, () => {
      if (this.$el.clientWidth <= 992) {
        this.isMenuCollapse = true;
      } else {
        this.isMenuCollapse = false;
      }
    });
  },
  mounted() {
    addResizeListener(this.$el, this.debounceResize);
  },
  beforeDestroy() {
    if (this.$el) {
      removeResizeListener(this.$el, this.debounceResize);
    }
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
     * 菜单展开/收起事件处理
     * @event
     */
    handleMenuFold() {
      this.isMenuCollapse = !this.isMenuCollapse;
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
