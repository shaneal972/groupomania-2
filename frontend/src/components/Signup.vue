<template>
 <div class="container">
    <header class="row mt-2 pb-2 justify-content-center">
      <img class="w-75 logo" alt="Groupomania logo" src="../assets/icon-left-font.svg">
    </header>
    <main class="row flex-column">
      <div>
        <h1>Le forum de notre entreprise</h1>
        <p>Soyez les bienvenue votre <span>RSE</span></p>
        <p>
          Nous vous encourageons à laisser vos messages sur notre forum, 
          afin de développer la <strong>cohésion</strong> 
        </p>
      </div>
      <hr>
        <form action="" class="w-75">
          <div class="input-group mb-1">
            <label for="name" class="form-label"></label>
            <input type="text" class="form-control" id="name" placeholder="Name : John Doe" required>
          </div>
          <div class="input-group mt-4 mb-3">
            <label for="email" class="form-label"></label>
            <input type="email" class="form-control" id="email" placeholder="Email" required>
          </div>
          <div class="input-group mt-4 mb-3">
            <label for="password" class="form-label"></label>
            <input type="password" class="form-control" id="password" placeholder="Password" required>
          </div>
          <div class="input-group">
            <input type="button" class="form-control btn-login" id="btn-submit" value="S'inscrire">
          </div>
        </form>
      <div class="row mt-3">
        <p class="p-signup">
          Vous avez un compte ? 
          <span>
            <a @click="$router.push('/')">Se connecter</a>
          </span>
        </p>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  methods: {
  }
}
</script>

<style scoped lang="scss" src="../assets/scss/connexion.scss">
</style>
