import { store, util } from 'setaria';
import UmeHttp from '../UmeHttp';

const storeState = {
  desc: {},
  constraint: {},
};

const getters = {
};

// mutations
const mutations = {
  setDesc(state, payload) {
    const localState = state;
    const entityId = util.get(payload, 'entCfg.entId', '');
    localState.desc = { ...state.desc, [entityId]: payload };
  },
  setConstraint(state, { constraint, entId }) {
    const localState = state;
    localState.constraint = { ...state.constraint, [entId]: constraint };
  },
};

const actions = {
  getDesc({ commit, state }, entityId) {
    return new Promise((resolve) => {
      if (!util.isEmpty(state.desc[entityId])) {
        resolve(state.desc[entityId]);
      } else {
        UmeHttp.invoke('EMS10001', [entityId])
          .then((res) => {
            commit('setDesc', res);
            resolve(res);
          });
      }
    });
  },
  getConstraint({ commit, state }, entityId) {
    return new Promise((resolve) => {
      if (!util.isEmpty(state.constraint[entityId])) {
        resolve(state.constraint[entityId]);
      } else {
        UmeHttp.invoke('EMS10002', [entityId])
          .then((res) => {
            commit('setConstraint', {
              entId: entityId,
              constraint: res,
            });
            resolve(res);
          });
      }
    });
  },
};

store.registerModule('entity', {
  namespaced: true,
  state: storeState,
  getters,
  mutations,
  actions,
});
