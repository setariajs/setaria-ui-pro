<template>
  <el-row type="flex" justify="center" align="middle" class="login-container">
    <el-col :span="5" class="login-form">
      <div class="system-title">
        <img src="/logo.png" class="logo"/><span class="title">{{ appTitle }}</span>
      </div>
      <div class="system-desc">
        开箱即用的中台前端解决方案
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
  .system-title {
    height: 60px;
    line-height: 50px;
    text-align: center;
  }
  .system-desc {
    font-size: 14px;
    color: rgba(0,0,0,.45);
    margin-bottom: 40px;
    text-align: center;
  }
  .logo {
    width: 50px;
    vertical-align: top;
    margin-right: 16px;
  }
  .title {
    font-size: 33px;
    color: rgba(0,0,0,.85);
    font-family: "Myriad Pro","Helvetica Neue",Arial,Helvetica,sans-serif;
    font-weight: 600;
    position: relative;
    top: 2px;
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
import Auth from '@/model/resource/Auth';
import { getConfigValue } from '@/model/util';

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
      return getConfigValue('TITLE');
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
    async doSubmit() {
      const { loginId, password, autoLogin } = this.loginForm;
      const res = await Auth.login(loginId, password, autoLogin);
      if (res) {
        let redirect = this.$route.query.redirect || WELCOM_PAGE_PATH;
        if (redirect === '/') {
          redirect = WELCOM_PAGE_PATH;
        }
        this.$router.push({ path: redirect });
      }
    },
  },
};
</script>
