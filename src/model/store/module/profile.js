import { fetchBasic } from '@/model/resource/Profile';

export default {
  namespaced: true,
  state: {
    basicGoodList: [],
    basicProgressList: [],
  },
  mutations: {
    updateBasicGoodList(state, payload) {
      const nativeState = state;
      nativeState.basicGoodList = payload;
    },
    updateBasicProgressList(state, payload) {
      const nativeState = state;
      nativeState.basicProgressList = payload;
    },
  },
  actions: {
    fetchBasic(context) {
      return new Promise((resolve) => {
        fetchBasic()
          .then((res) => {
            context.commit('updateBasicGoodList', res.basicGoods);
            context.commit('updateBasicProgressList', res.basicProgress);
            resolve(res);
          });
      });
    },
  },
};
