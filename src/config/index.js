import message from './message';
import routes from './route';
import store from './store';

export default {
  http: {
    api: {
      timeout: 60000,
      baseURL: '/api/',
    },
  },
  message,
  store,
  routes,
};
