import message from './message';
import routes from './route';
import store from './store';

export default {
  http: {
    api: {
      timeout: 60000,
      baseURL: 'http://47.94.254.158:5000/api/',
    },
  },
  message,
  store,
  routes,
};
