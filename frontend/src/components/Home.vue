<template>
  <div class="container">
    <header class="row mt-2 pb-2 justify-content-center">
      <img @click="$router.push('/')" class="w-75 logo" alt="Groupomania logo" src="../assets/icon-left-font.svg">    
    </header>
    <div class="main row justify-content-center pt-2">
      <section class="header row justify-content-center">
        <h1 class="fw-bolder mb-0">Notre forum - Groupomania</h1>
        <div class="break mb-2"></div>
        <nav class="d-flex justify-content-evenly mb-2 mt-2" >
          <router-link :to="{name:'create-post'}" class="btn shan-btn nav-link">Ajouter un article</router-link>
        </nav>
        <nav class="d-flex w-100 justify-content-evenly" >
          <router-link :to="{name:'login'}" class="nav-link shan-bg">Se connecter</router-link>
          <router-link :to="{name:'signup'}" class="nav-link shan-bg">S'inscrire</router-link>
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
              <a href="/posts" class="card-link position-relative text-decoration-none text-dark text-opacity-75" title="Commenter">
                <img src="../assets/comments.png" width="24" height="24" alt="Icône pour poster un commentaire">
                <span class="position-absolute top-0 start-0 translate-middle badge bg-info">3</span>
                Commenter
              </a>
            </div>
          </div>
          <div class="card-footer">
            <router-link class="btn shan-btn mb-2 mt-2" :to="{ name: 'read-post', params: { id: `${post.id}` }}">Lire L'article</router-link>
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