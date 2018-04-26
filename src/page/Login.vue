<template>
  <el-row type="flex" justify="center" align="middle" class="login-container">
    <el-col :span="5" class="login-form">
      <div class="login-system-title">
        <span class="title">{{ appTitle }}</span>
      </div>
      <el-form :model="loginForm" :rules="rules" ref="loginForm" @submit="doSubmit">
        <el-form-item prop="loginId">
          <el-input v-model="loginForm.loginId" placeholder="admin" autofocus></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="loginForm.password" placeholder="123456"></el-input>
        </el-form-item>
        <el-form-item prop="autoLogin" class="auto-login">
          <el-checkbox label="自动登录" v-model="loginForm.autoLogin"/>
        </el-form-item>
        <el-form-item class="login-button-container">
          <el-button type="primary" class="login-button" native-type="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>
<style scoped>
  .login-container {
    min-height: 100%;
    background-image: url(../assets/login-background.svg);
    background-repeat: no-repeat;
    background-position: center 110px;
    background-size: 100%;
    background-color: #f0f2f5;
  }
  .login-system-title {
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin-bottom: 24px;
  }
  .system-logo {
    width: 40px;
  }
  .title {
    vertical-align: text-bottom;
    font-size: 24px;
    text-transform: uppercase;
    display: inline-block;
    color: #666;
  }
  .login-form {
    width: 368px;
  }
  .auto-login {
    margin: -5px 0;
  }
  .login-button-container {
    margin-top: 20px;
    text-align: center;
  }
  .login-button {
    width: 100%;
  }
</style>
<script>
import { config } from 'setaria';
import UserResource from '@/model/resource/UserResource';

const WELCOM_PAGE_PATH = '/dashboard/analysis';

export default {
  /**
     * 组件名称
     * @type {String}
     */
  name: 'Login',
  /**
     * 数据绑定对象
     */
  data() {
    return {
      // 前画面路由对象
      fromRouter: {},
      // 登录表单项目校验规则
      rules: {
        loginId: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
      },
      // 登录表单对象
      loginForm: {
        loginId: '',
        password: '',
        autoLogin: true,
      },
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
  },
  /**
     * 组件事件处理函数
     * @type {Object}
     */
  methods: {
    /**
       * 登录按钮点击事件处理
       * @event
       */
    doSubmit() {
      const { loginId, password, autoLogin } = this.loginForm;
      UserResource.login(loginId, password, autoLogin)
        .then(() => {
          let redirect = this.$route.query.redirect || WELCOM_PAGE_PATH;
          if (redirect === '/') {
            redirect = WELCOM_PAGE_PATH;
          }
          this.$router.push({ path: redirect });
        });
    },
  },
};
</script>
