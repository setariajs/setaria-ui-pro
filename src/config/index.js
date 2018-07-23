import message from './message';
import routes from './route';
import store from './store';

export default {
  http: {
    api: {
      timeout: 60000,
      baseURL: 'https://jsonplaceholder.typicode.com/',
    },
  },
  message,
  store,
  routes,
};
