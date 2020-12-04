import message from './message';
import routes from './route';
import store from './store';

export default {
  http: {
    defaults: {
      timeout: 60000,
      baseURL: '/',
    },
    api: {
      baseURL: '/api/',
    },
  },
  message,
  store,
  routes,
};
