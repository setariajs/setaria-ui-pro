import { Message } from 'setaria';
import { Message as UIMessage } from 'setaria-ui';
import Auth from '@/model/resource/Auth';

/**
 * 跳转至登录页面
 * @param {*} path
 * @param {*} next
 */
function forwardToLoginPage(path, next) {
  next({
    name: 'Login',
    query: { path },
  });
}

export default function (checkServer = false) {
  return (to, from, next) => {
    // 目标页面不需要登录的场合
    if (to.meta.auth === false) {
      next();
      return;
    }
    if (!Auth.isTokenExist()) {
      forwardToLoginPage(to.path, next);
      return;
    }
    if (checkServer) {
      Auth.refreshUserInfo()
        .then(() => {
          next();
        })
        .catch(() => {
          UIMessage.error(new Message('MCM019E'));
          // 跳转至登录页面
          forwardToLoginPage(to.path, next);
        });
    } else {
      next();
    }
  };
}
