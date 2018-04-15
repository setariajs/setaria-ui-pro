<template>
  <ume-row type="flex" justify="center" align="middle" class="login-container">
    <ume-col :span="5" class="login-form">
      <div class="login-system-title">
        <span class="title">{{ appTitle }}</span>
      </div>
      <ume-form :model="loginForm" :rules="rules" ref="loginForm" @submit="doSubmit">
        <ume-form-item prop="loginId">
          <ume-input v-model="loginForm.loginId" placeholder="admin" autofocus></ume-input>
        </ume-form-item>
        <ume-form-item prop="password">
          <ume-input type="password" v-model="loginForm.password" placeholder="123456"></ume-input>
        </ume-form-item>
        <ume-form-item class="login-button-container">
          <ume-button type="primary" class="login-button" native-type="submit">登录</ume-button>
        </ume-form-item>
      </ume-form>
    </ume-col>
  </ume-row>
</template>
<style scoped>
  .login-container {
    height: 100%;
    background-color: #f8f8f8;
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.08);
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
    font-size: 18px;
    text-transform: uppercase;
    display: inline-block;
    color: #666;
  }
  .login-form {
    min-width: 320px;
    background-color: #FCFCFD;
    padding: 20px;
    border-radius: 10px;
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
      UserResource.login(this.loginForm.loginId, this.loginForm.password)
        .then(() => {
          const path = this.$route.query.path || '/';
          this.$router.push({ path });
        });
    },
  },
};
</script>
