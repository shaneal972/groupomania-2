<template>
  <div class="container">
    <header class="row mt-2 pb-2 justify-content-center">
      <img @click="$router.push('/')" class="w-75 logo" alt="Groupomania logo" src="../assets/icon-left-font.svg">
    </header>
    <div class="main row justify-content-center pt-2">
      <section class="header row justify-content-center">
        <h1 class="fw-bolder">{{ post.title }}</h1>
        <div class="break mb-2"></div>
        <nav class="d-flex w-75 flex-column flex-sm-row gap-3 justify-content-around align-items-center" >
          <router-link :to="{name: 'posts', params: { idUser: getUserStore.id}}" class="mb-2 w-50 shan-bg text-opacity-75 text-decoration-none" title="Retour vers l'accueil du site">
            Accueil
          </router-link>
          <router-link :to="{name: 'create_comment', params: { idUser: getUserStore.id, idPost: post.id }}" class="mb-2 w-50 shan-bg text-opacity-75 text-decoration-none" title="Permet de créer un commentaire">
            Commenter
          </router-link>
        </nav>
        <div class="break mb-5"></div>
      </section>
      <section class="body">
        <article class="card mb-5">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
                <p class="card-subtitle mb-1 text-muted shan-fz">Posté le : {{ formatClassicDate(post.createdAt) }}</p>
                <h6 class="card-subtitle mb-1 text-muted shan-fz">Ecrit par : {{ this.name }}</h6>
            </div>
            <p class="card-text text-start mt-3">{{ post.content }}</p>
          </div>
          <div class="d-flex justify-content-between card-footer">
            <router-link v-if="verifUserPosted()" class="btn shan-btn-warning mb-2 mt-2 post-btn" title="Permet de modifier un article" :to="{name: 'update-post', params: { id: post.id }}">
              <button class="btn shan-btn-warning post-btn">Modifier</button>
            </router-link>
            <div v-if="getRole() === 'modérateur'" class="btn shan-btn-warning mb-2 mt-2">
              <a :href="`mailto:${this.email}`" title="Envoi d'un mail à un utilisateur" class="btn d-block post-btn">Signaler</a>
            </div>
            <router-link v-if="getRole() === 'modérateur'" class="btn shan-btn-danger mb-2 mt-2 post-btn p-0" title="permet de supprimer un article" :to="{name: 'delete-post', params: {id: post.id}}">
              <button class="btn shan-btn-danger post-btn w-100 pt-2" @click="deletePost()">Supprimer</button>
            </router-link>
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
                    {{ formatDate(comment.createdAt) }}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>
      </section>
    </div>
    <footer class="row main">
      <p class="text-center">
        &copy; - ShanDev 2021
      </p>
    </footer>
  </div>
</template>

<script>
// import postsJSON from '@/utils/posts.json';
import axios from 'axios';
import dayjs from 'dayjs';
const relativeTime = require('dayjs/plugin/relativeTime');

export default {
  name: "ReadOnePost",
  data () {
    return {
      post: {},
      // id du post dans l'url
      id: 0,
      name: '',
      email: null,
      comments: {},
      date: null,
      idConnected: null
    }
  },
  // created(){
  //   this.getUserStore();
  // },
  mounted () {
    this.getPost();
    this.formatDate(this.date);
  },
  methods: {
    formatClassicDate(date){
      return dayjs(date).format('DD/MM/YYYY');
    },
    async getPost() {
      // Récupération du token du localStorage
      const user = localStorage.getItem('authUser');
      const accessToken = JSON.parse(user).user.token;
      
      this.id = this.$route.params.id
      const result = await axios.get(this.$api.POST_GET_ONE, { 
        params: { id: this.id },
          // Ajout du header Authorization
        headers: {
          Authorization: 'Bearer ' + accessToken,
        }
      });
      this.post = result.data.post;
      this.name =  result.data.user.name;
      this.email = result.data.user.email;
      this.comments = this.post.Comments;
    },
    async deletePost(){
      // Récupération du token depuis le store 
      const user = JSON.parse(localStorage.getItem('authUser'));
      const accessToken = user.user.token;
      console.log(accessToken);
      this.id = this.$route.params.id
      console.log(this.id);
      try {
        await axios.delete(
          this.$api.POST_DELETE, 
          {
            params: { id: this.id }, 
            headers: {
              Authorization: "Bearer " + accessToken,
            }
          }
        );
        this.$router.push({
          path: '/',
          query: {id: this.getUserStore.id}
        });
        }catch(error) {
          console.log(error.message);
        }
    },
    formatDate(date){
      dayjs.extend(relativeTime);
      return dayjs(date).fromNow();
    },
    getRole(){
      if(this.$store.state.user.id){
        return this.$store.getters.getRole;
      }
    },
    getUserStorage() {
      if(localStorage.getItem('authUser') !== null) {
        return JSON.parse(localStorage.getItem('authUser')).user;
      }
    },
    // Vérifie que l'id de l'utilisateur qui a posté l'article est celui qui lit l'article
    verifUserPosted(){
      this.idConnected = this.getUserStore.id;
      return this.idConnected === this.post.userId ? true : false;
    }
  },
  computed: {
    getUserStore(){
      return this.$store.state.user;
    },
  }
}
</script>

<style>

</style>