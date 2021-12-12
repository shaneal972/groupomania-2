<template>
  <div id="app">
    <Home />
  <!-- <div>
    <Signup />
  </div> -->
  </div>
</template>

<script>
import Home from './components/Home.vue';
// import Signup from './components/Signup.vue';

export default {
  name: 'App',
  components: {
    Home,
    // Signup
  },
  data () {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss">
// @import "~@/assets/scss/vendors/bootstrap-vue/index";
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
