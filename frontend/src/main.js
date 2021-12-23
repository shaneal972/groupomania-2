// import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue';
import './plugins/bootstrap-vue';
import App from './App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import router from './routes/AppRoutes';
import { api } from './utils/api';
import store from './store'


Vue.prototype.$api = api;
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
