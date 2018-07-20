export default {
  scope: 'session',
  namespaced: true,
  state: {
    token: '',
    user: null,
  },
  getters: {
    token: state => state.token,
    user: state => state.user,
  },
  mutations: {
    token(state, val) {
      const nativeState = state;
      nativeState.token = val;
    },
    user(state, val) {
      const nativeState = state;
      nativeState.user = val;
    },
  },
};
