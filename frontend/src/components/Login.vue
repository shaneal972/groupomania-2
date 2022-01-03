<template>
  <div class="container">
    <header class="row mt-2 pb-2 justify-content-center">
      <img class="w-75 logo" alt="Groupomania logo" src="../assets/icon-left-font.svg">
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
      <div v-if="error" class="error">{{ this.error }}</div>
      <form @submit.prevent="login()" class="w-75">
        <div class="input-group mb-1">
          <label for="email" class="form-label"></label>
          <input type="email" class="form-control" v-model="email" id="email" placeholder="Email" required>
        </div>
        <div class="input-group mt-4 mb-3">
          <label for="password" class="form-label"></label>
          <input type="password" class="form-control" v-model="password" id="password" placeholder="Password" required>
        </div>
        <div class="input-group">
          <input type="submit" class="form-control btn-login"  id="btn-submit" value="Se connecter">
        </div>
      </form>
      <div class="row mt-3">
        <p class="p-signup">
          Pas de compte ? 
          <span>
            <a @click.prevent="$router.push('/users/signup')">S'inscrire</a>
          </span>
        </p>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      email: null,
      password: null,
      userId: 0,
      token: null,
      userInfos: null,
      role: null,
      error: null
    }
  },
  methods: {
    login() {
      const url = this.$api.USER_LOGIN;
      // Envoi des informations au backend avec axios 
      axios.post(
          url,
          {
            email: this.email,
            password: this.password
          }
      )
      .then((response) => {
        this.userInfos = response.data;
        console.log(this.userInfos);
        this.userId = this.userInfos.id;
        localStorage.setItem('authUser', JSON.stringify({user: this.userInfos}));
        // Ajout des infos user dans le store
        this.$store.dispatch('addUser', this.userInfos);
        this.$router.push({
          path: '/', 
          query: {userId: this.userId.toString()}
        });
      })
      .catch((error) => {
        this.error = error;
      })
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="../assets/scss/connexion.scss">
  
</style>
