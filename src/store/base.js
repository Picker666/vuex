
const state = {
  count: 0,
  times: 1,
  toDos: [
    { id: 1, text: '...', done: true },
    { id: 2, text: '...', done: false }
  ]
};

const mutations = {
  increment(state, delta =1) {
    state.count+=delta;
  },
  timesIncrease(state, payload) {
    let delta = 1;
    if (payload) {
      delta = payload.times;
    }
    state.times+=delta;
  }
};

const getters = {
  doneToDos: state => state.toDos.filter(todo => todo.done),
  doneToDosCount: (state, getters) => getters.doneToDos.length,
  getTodoById: (state) => id => state.toDos.find(todo => todo.id == id)
};

const actions = {
  syncIncrement({ commit }, delta = 1) {
    commit('increment', delta, {root: true});
  },
  asyncIncrement({ commit, dispatch }, delta = 2) {
    return new Promise((resolve) => {
      setTimeout(() => {
        commit('increment', delta);
        dispatch('syncIncrement', delta);
        resolve(delta * 2);
      }, 1000);
    })
  },
  async incrementTimes({ commit, dispatch }) {
    const d = await dispatch('asyncIncrement', 3);
    commit('timesIncrease', { times: d });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
};