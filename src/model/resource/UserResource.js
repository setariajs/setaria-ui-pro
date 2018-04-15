import Setaria, { storeTypes, util } from 'setaria';
// import UmeHttp from '../UmeHttp';

export default class User {
  /**
   * 登录
   * @param  {String}  userId   用户Id
   * @param  {String}  password 密码
   * @return {Promise}
   */
  static login(userId, password) {
    return new Promise((resolve, reject) => {
      // 调用鉴权服务
      setTimeout(() => {
        if (userId === 'admin' && password === '123456') {
          const userInfo = {
            user: {
              userName: '系统管理员',
            },
          };
          Setaria.plugin.store.commit(storeTypes.SET_USER, userInfo);
          Setaria.plugin.store.commit(storeTypes.SET_TOKEN, 'edbc545993283dc8e18b8e069ee9776e1523539082028');
          resolve(userInfo);
        } else {
          const err = {
            message: '用户名密码错误',
          };
          reject(err);
        }
      }, 500);
      // UmeHttp.invoke('EMS00001', [userId, password]).then((res) => {
      //   Setaria.plugin.store.commit(storeTypes.SET_USER, res);
      //   Setaria.plugin.store.commit(storeTypes.SET_TOKEN, res.token);
      //   resolve(res);
      // }).catch((err) => {
      //   reject(err);
      // });
    });
  }

  /**
   * 登出
   * @return {Promise}
   */
  static logout() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 500);
    });
    // return UmeHttp.invoke('EMS00002', [userId]);
  }

  /**
   * 取得当前用户信息
   * @static
   * @returns
   * @memberof User
   */
  static getUser() {
    return Setaria.plugin.store.getters[storeTypes.GET_USER];
  }

  /**
   * 判断当前用户是否登陆
   * @return {Boolean} 当前用户已经登陆的场合，返回true
   */
  static isLogin() {
    return !util.isEmpty(Setaria.plugin.store.getters[storeTypes.GET_TOKEN]);
  }

  /**
   * 清空当前用户信息
   */
  static clearUser() {
    Setaria.plugin.store.commit(storeTypes.SET_USER, null);
    Setaria.plugin.store.commit(storeTypes.SET_TOKEN, null);
  }
}
