import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

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
}

const store = new Vuex.Store({
  state,
  mutations,
  getters
});

export default store;
