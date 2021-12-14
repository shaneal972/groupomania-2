// import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue';
import './plugins/bootstrap-vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import router from './routes/AppRoutes';



Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
