<template>
  <div class="container">
    <header class="row mt-2 pb-2 justify-content-center">
      <img @click="$router.push('/')" class="w-75 logo" alt="Groupomania logo" src="../assets/icon-left-font.svg">
      <nav></nav>
    </header>
    <main class="row flex-column">
      <h1>Le forum de notre entreprise</h1>
      <p>Soyez les bienvenue votre <span>RSE</span></p>
      <p>
        Nous vous encourageons à laisser vos messages sur notre forum, 
        afin de développer la <strong>cohésion</strong> 
      </p>
      <hr>
      <form @submit.prevent="login" class="w-75">
        <div class="input-group mb-1">
          <label for="email" class="form-label"></label>
          <input type="email" class="form-control" v-model="email" placeholder="Email" required>
        </div>
        <div class="input-group mt-4 mb-3">
          <label for="password" class="form-label"></label>
          <input type="password" class="form-control" v-model="password" placeholder="Password" required>
        </div>
        <div class="input-group">
          <input type="submit" class="form-control btn-login" :class="{'btn-disabled': !validFields}" id="btn-submit" value="Se connecter">
        </div>
      </form>
      <div class="row mt-3">
        <p class="p-signup">
          Pas de compte ? 
          <span>
            <a @click.prevent="$router.push('/signup')">S'inscrire</a>
          </span>
        </p>
      </div>
    </main>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      name: '',
      email: '',
      password: '',
    }
  },
  mounted () {
    this.login()
  },
  computed: {
    validFields: function () {
      if (this.email != "" && this.password != "") {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    login () {
      const email = this.email;
      const password = this.password;
      console.log(email, password);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="../assets/scss/connexion.scss">
  
</style>
