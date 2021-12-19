<template>
  <div class="container">
    <header class="row mt-2 pb-2 justify-content-center">
      <img @click="$router.push('/')" class="w-75 logo" alt="Groupomania logo" src="../assets/icon-left-font.svg">    </header>
    <div class="main row justify-content-center pt-2">
      <section class="header row justify-content-center">
        <h1 class="fw-bolder">Notre forum - Groupomania</h1>
        <div class="break mb-2"></div>
        <button class="btn shan-btn mb-4 mt-3" v-if="logged">Ajouter un article</button>
        <nav class="d-flex w-75 justify-content-evenly" v-else>
          <router-link to="login" class="nav-link shan-bg">Se connecter</router-link>
          <router-link to="signup" class="nav-link shan-bg">S'inscrire</router-link>
        </nav>
        <div class="break mb-5 mt-2"></div>
      </section>
      <section class="body">
        <div class="card mb-5" v-for="post in posts" :key="post.id">
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <h6 class="card-subtitle mb-2 text-muted shan-fz">Ecrit par : John DOE</h6>
            <p class="card-date text-start mb-1 mt-4 shan-fz">Posté le : {{ post.createdAt }}</p>
            <p class="card-text text-start shan-pt">{{ post.content.substring(0, 150) }}</p>
            <div class="d-flex justify-content-evenly">
              <a href="#" class="card-link position-relative" title="Voter">
                <img src="../assets/up-2.png" width="24" height="24" alt="Icône pour voter">
                <span class="position-absolute top-0 start-100 translate-middle badge bg-info">5</span>
              </a>
              <a href="#" class="card-link position-relative" title="Commenter">
                <img src="../assets/comments.png" width="24" height="24" alt="Icône pour poster un commentaire">
                <span class="position-absolute top-0 start-100 translate-middle badge bg-info">3</span>
              </a>
            </div>
          </div>
          <div class="card-footer">
            <button class="btn shan-btn mb-2 mt-2" @click="$router.push(`/posts/${post.id - 1}`)">Lire L'article</button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import postsJSON from '@/utils/posts.json';

export default {
    name: 'Home',
    data () {
        return {
            posts: [],
            logged: false,
        }
    },
    mounted () {
      this.getPosts();
    },
    methods: {
      async getPosts() {
        this.posts = postsJSON;
      },
      
    }

}
</script>

<style lang="scss" src="../assets/scss/connexion.scss">
  
</style>