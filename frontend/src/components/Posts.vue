<template>
  <div class="container">
    <header class="row mt-2 pb-2 justify-content-center">
      <img @click="$router.push('/')" class="w-75 logo" alt="Groupomania logo" src="../assets/icon-left-font.svg">
    </header>
    <div class="main row justify-content-center pt-2">
      <section class="header row justify-content-center">
        <h1 class="fw-bolder">Forum</h1>
        <div class="break mb-2"></div>
        <button class="btn shan-btn mb-4 mt-3">Ajouter un article</button>
        <div class="break mb-5"></div>
      </section>
      <section class="body">
        <div class="card mb-5" v-for="post in posts" :key="post.id">
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <h6 class="card-subtitle mb-2 text-muted shan-fz">Ecrit par : John DOE</h6>
            <p class="card-date text-start mb-1 mt-4 shan-fz">Posté le : {{ post.createdAt }}</p>
            <p class="card-text text-start shan-pt">{{ post.content.substring(0, 150) }}</p>
            <a href="#" class="card-link">Voter</a>
            <a href="#" class="card-link">Commenter</a>
          </div>
          <div class="card-footer">
            <button class="btn shan-btn mb-2 mt-2" @click="$router.push('/posts/:id')">Lire L'article</button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import postsJSON from '@/utils/posts.json';

export default {
    name: 'Posts',
    data () {
        return {
            posts: postsJSON
        }
    },
    mounted () {
      this.getPosts();
    },
    methods: {
      async getPosts() {
      }
    }

}
</script>

<style lang="scss" src="../assets/scss/connexion.scss">
  
</style>