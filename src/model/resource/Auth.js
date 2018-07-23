import Setaria from 'setaria';
import { isEmpty } from '@/model/util';
import apiHttp from './apiHttp';

/**
 * 清空当前用户信息
 */
const clearSessionInfo = () => {
  const store = Setaria.getStore();
  store.commit('common/token', null);
  store.commit('common/user', null);
};

/**
 * Auth Class
 */
class Auth {
  /**
   * 登录
   * @param  {String}  userId   用户Id
   * @param  {String}  password 密码
   * @return {Promise}
   */
  static async login(username, password) {
    const store = Setaria.getStore();
    const res = await apiHttp.post('posts', {
      username,
      password,
    });
    if (res) {
      store.commit('common/token', 'Iamtoken');
    }
    return res;
  }

  /**
   * 登出
   * @return {Promise}
   */
  static async logout() {
    apiHttp.post('posts');
    // 即时清空用户信息
    clearSessionInfo();
  }

  /**
   * 调用服务取得最新用户信息
   * @return {Promise}
   */
  static async refreshUserInfo() {
    const store = Setaria.getStore();
    const res = await apiHttp.get('users/1');
    // 在本地保存用户信息
    store.commit('common/user', res);
  }

  /**
   * 取得当前用户信息
   * @return {Object}
   */
  static getUserInfo() {
    const store = Setaria.getStore();
    return store.getters['common/user'];
  }

  /**
   * 取得Token
   *
   * @static
   * @returns
   * @memberof Auth
   */
  static getToken() {
    const store = Setaria.getStore();
    return store.getters['common/token'];
  }

  /**
   * 判断当前用户是否登陆
   * @return {Boolean} 当前用户已经登陆的场合，返回true
   */
  static isTokenExist() {
    return !isEmpty(this.getToken());
  }
}

export default Auth;
