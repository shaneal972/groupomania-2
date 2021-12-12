// import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue';
import './plugins/bootstrap-vue'
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css'



Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
