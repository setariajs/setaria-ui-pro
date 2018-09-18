export default {
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
    updateStep(state, payload) {
      const nativeState = state;
      Object.keys(nativeState.step).forEach((key) => {
        nativeState.step[key] = payload[key];
      });
    },
  },
  actions: {
    submitStepForm(context, payload) {
      return new Promise((resolve) => {
        setTimeout(() => {
          context.commit('updateStep', payload);
          resolve();
        }, 1000);
      });
    },
    submitAdvancedForm() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });
    },
  },
};
