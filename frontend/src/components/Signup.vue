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
          <input type="button" class="form-control btn-login" id="btn-submit" value="S'inscrire">
        </div>
      </form>
      <p class="p-signup">
        Vous avez un compte ? 
        <span>
          <a @click="$router.push('/')">Se connecter</a>
        </span>
      </p>
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

<style>

</style>