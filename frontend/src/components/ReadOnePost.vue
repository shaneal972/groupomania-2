<template>
  <div class="container">
    <header class="row mt-2 pb-2 justify-content-center">
      <img @click="$router.push('/')" class="w-75 logo" alt="Groupomania logo" src="../assets/icon-left-font.svg">
    </header>
    <div class="main row justify-content-center pt-2">
      <section class="header row justify-content-center">
        <h1 class="fw-bolder">Article - {{ post.id }}</h1>
        <div class="break mb-2"></div>
        <button class="btn shan-btn mb-4 mt-3">{{ post.title }}</button>
        <div class="break mb-5"></div>
      </section>
      <section class="body">
        <article class="card mb-5">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
                <p class="card-subtitle mb-1 text-muted shan-fz">Posté le : {{ post.createdAt }}</p>
                <h6 class="card-subtitle mb-1 text-muted shan-fz">Ecrit par : {{ this.name }}</h6>
            </div>
            <p class="card-text text-start mt-3">{{ post.content }}</p>
            <div class="d-flex justify-content-evenly">
              <a href="#" class="card-link position-relative" title="Voter">
                <img src="../assets/up-2.png" width="24" height="24" alt="Icône pour voter">
                <span class="position-absolute top-0 start-100 translate-middle badge bg-info">5</span>
              </a>
              <a href="#" class="card-link position-relative" title="Commenter">
                <img src="../assets/comments.png" width="24" height="24" alt="Icône pour poster un commentaire">
                <span class="position-absolute top-0 start-100 translate-middle badge bg-info">4</span>
              </a>
            </div>
          </div>
          <div class="d-flex justify-content-between card-footer">
            <button class="btn shan-btn-warning mb-2 mt-2 post-btn" @click="$router.push(`/posts/${post.id}`)">Modifier</button>
            <button class="btn shan-btn-danger mb-2 mt-2 post-btn" @click="$router.push(`/posts/${post.id}`)">Supprimer</button>
          </div>
        </article>
      </section>
    </div>
  </div>
</template>

<script>
// import postsJSON from '@/utils/posts.json';
import axios from 'axios';

export default {
    name: "ReadOnePost",
    data () {
      return {
        post: {},
        id: 0,
        name: ''
      }
    },
    mounted () {
      this.getPost();
    },
    methods: {
      async getPost() {
        this.id = this.$route.params.id
        const result = await axios.get(this.$api.POST_GET_ONE, { params: { id: this.id } });
        this.post = result.data.post;
        this.name =  result.data.user.name;
      }
    }
}
</script>

<style>

</style>