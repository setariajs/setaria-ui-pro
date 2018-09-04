export default {
  scope: 'stepForm',
  namespaced: true,
  state: {
    step: {
      payAccount: 'setaria@alipay.com',
      receiverAccount: 'test@example.com',
      receiverName: 'Alex',
      amount: 500,
    },
  },
  mutations: {
    updateStep(state, val) {
      const nativeState = state;
      Object.keys(nativeState.step).forEach((key) => {
        nativeState.step[key] = val[key];
      });
    },
  },
};
