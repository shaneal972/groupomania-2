<template>
  <div class="container">
    <header class="row mt-2 pb-2 justify-content-center">
        <img @click="$router.push('/')" class="w-75 logo" alt="Groupomania logo" src="../assets/icon-left-font.svg">
        <nav></nav>
    </header>
    <main class="row flex-column">
      <h1 class="fs-4">Le forum de notre entreprise</h1> 
      <p class="text-muted">
          Vous êtes sur la page de votre profile. <br>
          Où vous pouvez mettre à jour vos informations.
      </p>
      <hr>
    </main>
  </div>
</template>

<script>
export default {
    name: 'Profile',
}
</script>

<style>

</style>