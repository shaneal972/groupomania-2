<template>
  <div class="container">
    <header class="row mt-2 pb-2 justify-content-center">
      <img @click="$router.push('/')" class="w-75 logo" alt="Groupomania logo" src="../assets/icon-left-font.svg">
    </header>
    <div class="main row justify-content-center pt-2">
      <section class="header row justify-content-center">
        <h1 class="fw-bolder">Article - {{ post.id }}</h1>
        <div class="break mb-2"></div>
        <button class="btn w-75 shan-btn mb-4 mt-3">{{ post.title }}</button>
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
            <!-- <div class="d-flex justify-content-evenly">
              <a href="#" class="card-link position-relative" title="Voter">
                <img src="../assets/up-2.png" width="24" height="24" alt="Icône pour voter">
                <span class="position-absolute top-0 start-100 translate-middle badge bg-info">5</span>
              </a>
              <a href="#" class="card-link position-relative" title="Commenter">
                <img src="../assets/comments.png" width="24" height="24" alt="Icône pour poster un commentaire">
                <span class="position-absolute top-0 start-100 translate-middle badge bg-info">4</span>
              </a>
            </div> -->
          </div>
          <div class="d-flex justify-content-between card-footer">
            <button class="btn shan-btn-warning mb-2 mt-2 post-btn" @click="$router.push(`/posts/${post.id}`)">Modifier</button>
            <button class="btn shan-btn-danger mb-2 mt-2 post-btn" @click="$router.push(`/posts/${post.id}`)">Supprimer</button>
          </div>
        </article>
        <article>
          <div class="row">
            <div class="col mb-2">
              <h3 class="position-relative btn w-50 btn-light">
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                  {{ this.comments.length}}
                </span>
                Commentaires
              </h3>
            </div>
          </div>
          <section class="d-flex flex-column justify-content-md-center">
            <div class="row" v-for="comment in this.comments" :key="comment.id">
              <div class="col">
                <div class="card text-center mb-3">
                  <div class="card-header">
                    <span class="text-muted">Rédigé par -</span> {{ comment.User.name}}
                  </div>
                  <div class="card-body">
                    <!-- <h5 class="card-title">Special title treatment</h5> -->
                    <p class="card-text">{{ comment.message }}</p>          
                  </div>
                  <div class="card-footer text-muted">
                    2 days ago
                  </div>
                </div>
              </div>
            </div>
          </section>
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
        name: '',
        comments: {}
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
        this.comments = this.post.Comments;
      }
    }
}
</script>

<style>

</style>