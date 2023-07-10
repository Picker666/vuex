import Vue from 'vue';
import Vuex from 'vuex';

import base from './base';
import advanced from './advanced';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    base,
    advanced
  }
});

export default store;
