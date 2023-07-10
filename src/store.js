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
  increment(state) {
    state.count++;
  },
  timesIncrease(state) {
    state.times++;
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
