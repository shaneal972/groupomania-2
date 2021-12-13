// import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue';
import './plugins/bootstrap-vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import VueRouter from 'vue-router';

Vue.use(VueRouter);



Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
