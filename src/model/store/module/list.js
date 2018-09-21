import { queryFakeList } from '@/model/resource/Api';

export default {
  namespaced: true,
  state: {
    fakeList: [],
  },
  mutations: {
    updateFakeList(state, payload) {
      const nativeState = state;
      nativeState.fakeList = payload;
    },
  },
  actions: {
    queryFakeList(context, payload) {
      return new Promise((resolve) => {
        queryFakeList(payload)
          .then((res) => {
            context.commit('updateFakeList', res);
            resolve(res);
          });
      });
    },
  },
};
