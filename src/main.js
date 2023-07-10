import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import 'es6-promise/auto';

import routes from './routes';
import store from './store';

Vue.use(VueRouter);

const router = new VueRouter({routes});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
