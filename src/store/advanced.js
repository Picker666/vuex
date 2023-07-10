const state = {
  count: 0
};

const mutations = {
  increment(state, delta) {
    state.count += delta;
  },
  decrement(state, delta) {
    state.count -= delta;
  }
};

const getters = {
  double(state, getters) {
    console.log('getters: ', getters);
    return state.count % 2 === 0;
  }
};

const actions = {
  syncIncrement({ commit },  delta) {
    commit('increment', delta, {root: true});
  },
  asyncIncrement({ dispatch }, delta) {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch('syncIncrement', delta);
        resolve(delta/2);
      }, 1000);
    })
  },
  async asyncCalc({ dispatch }, delta) {
    const d = await dispatch('asyncIncrement', delta);
    dispatch('syncIncrement', d);
  }
}

export default {
  // namespaced: true,
  state,
  mutations,
  getters,
  actions
}