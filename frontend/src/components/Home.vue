<template>
  <div class="container">
    <header>
      <img alt="Groupomania logo" src="../assets/icon-above-font300.png">
    </header>
    <main>
      <h1>Le forum de notre entreprise</h1>
      <p>Soyez les bienvenue votre <span>RSE</span></p>
      <p>
        Nous vous encourageons à laisser vos messages sur notre forum, 
        afin de développer la <strong>cohésion</strong> 
      </p>
      <hr>
      <form action="" class="w-75">
        <div class="input-group mb-1">
          <label for="email" class="form-label"></label>
          <input type="email" class="form-control" id="email" placeholder="Email">
        </div>
        <div class="input-group mt-4 mb-3">
          <label for="password" class="form-label"></label>
          <input type="password" class="form-control" id="password" placeholder="Password">
        </div>
        <div class="input-group">
          <input type="button" class="form-control btn-login" id="btn-submit" value="Se connecter">
        </div>
      </form>
      <p class="p-signup">
        Pas de compte ? 
        <span>
          <a @click="$router.push('/signup')">S'inscrire</a>
        </span>
      </p>
    </main>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    
  }),
  methods: {
    // getSignup() {
    //     this.signup = true;
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media  screen and (max-width: 576px) {
  .container{
    width: 375px;
    margin: auto 0;
    padding: 0;
  }

  header {
    padding-bottom: 20px;
  }

  main {
    background: #FAE0DE;
    // height: 300px;
    padding-bottom: 10px;
    height: 100vh;

    .p-signup {
      margin-top: 20px;
      span {
        font-weight: 800;
        a {
          color: #FC2F07;
          text-decoration: none;
        }
      }
    }

    h1 {
      font-size: 1.3rem;
      margin-bottom: 10px;
      padding-top: 10px;
      color: #000;
    }
  }


  p {
    font-size: 0.9rem;
    text-align: center;
    margin-bottom: 0;
  }

  p span {
    color: #FC2F07;
  }

  hr {
    width: 70%;
    border: 1px dashed black;
    margin-left: 55px;
    margin-top: 20px;
  }

  form {
    margin: 0 auto;
    .btn-login {
      background: #FC2F07;
      color: #FAE0DE;
      font-size: 1.4rem;
    }
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
// a {
//   color: #42b983;
// }
</style>
