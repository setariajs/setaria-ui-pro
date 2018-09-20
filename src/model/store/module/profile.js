import { fetchBasic, fetchAdvanced } from '@/model/resource/Profile';

export default {
  namespaced: true,
  state: {
    basicGoodList: [],
    basicProgressList: [],
    advancedOperation1List: [],
    advancedOperation2List: [],
    advancedOperation3List: [],
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
    updateAdvanced(state, payload) {
      const nativeState = state;
      const {
        advancedOperation1,
        advancedOperation2,
        advancedOperation3,
      } = payload;
      nativeState.advancedOperation1List = advancedOperation1;
      nativeState.advancedOperation2List = advancedOperation2;
      nativeState.advancedOperation3List = advancedOperation3;
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
    fetchAdvanced(context) {
      return new Promise((resolve) => {
        fetchAdvanced()
          .then((res) => {
            context.commit('updateAdvanced', res);
            resolve(res);
          });
      });
    },
  },
};
