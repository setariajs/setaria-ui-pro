import UserResource from '@/model/resource/UserResource';

export default function ({ to }) {
  // 当目标画面需要鉴权的场合
  if (to.meta.auth !== false) {
    // 当前用户没有登录的场合
    if (!UserResource.isLogin()) {
      // 登录成功后重新跳转至目标画面
      const { path } = to;
      return {
        name: 'Login',
        query: { path },
      };
    }
  }
  return null;
}
