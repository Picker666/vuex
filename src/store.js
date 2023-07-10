import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
  count: 0,
  times: 1
};

const mutations = {
  increment(state) {
    state.count++;
  },
  timesIncrease(state) {
    state.times++;
  }
}

const store = new Vuex.Store({
  state,
  mutations
});

export default store;
