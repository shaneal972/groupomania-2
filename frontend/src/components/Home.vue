<template>
  <div class="container">
    <header class="row mt-2 pb-2 justify-content-center">
      <img @click="$router.push('/')" class="w-75 logo" alt="Groupomania logo" src="../assets/icon-left-font.svg">    
    </header>
    <div class="main row justify-content-center pt-2">
      <section class="header row justify-content-center">
        <h1 class="fw-bolder mb-0">Notre forum - Groupomania</h1>
        <div class="break mb-2"></div>
        <!-- <nav class="d-flex justify-content-evenly mb-2 mt-2" >
        </nav> -->
        <nav class="d-flex w-75 flex-column flex-sm-row gap-3 justify-content-around align-items-center" >
          <router-link v-if="logged" :to="{name:'create-post', params:{idUser: this.getUserIdLogged()}}" class="btn shan-btn nav-link">Ajouter un article</router-link>
          <router-link v-if="!logged" :to="{name:'login'}" class="nav-link shan-bg">Se connecter</router-link>
          <router-link v-else :to="{name:'profile'}" class="nav-link shan-bg">Profile</router-link>
          <router-link v-if="!logged" :to="{name:'signup'}" class="nav-link shan-bg">S'inscrire</router-link>
          <router-link v-else :to="{name:'posts'}" class="nav-link shan-bg">Se déconnecter</router-link>
        </nav>
        <div class="break mb-5 mt-2"></div>
        <!-- {{ this.getUserIdLogged() }} -->
      </section>
      <section class="body">
        <div class="card mb-5" v-for="post in posts.posts" :key="post.id">
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <h6 class="card-subtitle mb-2 text-muted shan-fz">Ecrit par : {{post.User.name}}</h6>
            <p class="card-date text-start mb-1 mt-4 shan-fz">Posté le : {{ formatDate(post.createdAt)  }}</p>
            <p class="card-text text-start shan-pt mb-5">{{ post.content.substring(0, 300)  }}</p>
            <div class="d-flex justify-content-end w-75">
              <!-- <a href="#" class="card-link position-relative text-decoration-none text-dark text-opacity-75" title="Voter">
                <img src="../assets/up-2.png" width="24" height="24" alt="Icône pour voter">
                <span class="position-absolute top-0 start-0 translate-middle badge bg-info">5</span>
                Voter
              </a> -->
              <div class="card-link position-relative text-decoration-none text-dark text-opacity-75" title="Commenter">
                <img src="../assets/comments.png" width="24" height="24" alt="Icône pour poster un commentaire">
                <span class="position-absolute top-0 start-0 translate-middle badge bg-info">{{ post.Comments.length}}</span>
                <router-link :to="{name: 'create_comment', params: { idUser: post.User.id, idPost: post.id }}" class="text-opacity-75 text-decoration-none text-dark">
                  Commenter
                </router-link>
              </div>
            </div>
          </div>
          <!-- <create-user-comment-post /> -->
          <div class="card-footer">
            <router-link class="btn shan-btn mb-2 mt-2" :to="{ name: 'read-post', params: { id: post.id }}">Lire L'article</router-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import dayjs from 'dayjs';
// import CreateUserCommentPost from './CreateUserCommentPost.vue';

// const cors = require('cors');


export default {

    name: 'Home',
    // components: {
    //   'create-user-comment-post': CreateUserCommentPost
    // },
    data () {
        return {
            posts: {},
            logged: false,
            error: false,
            nbComments: 0,
            date: null,
            userId: 0
        }
    },
    mounted () {
      this.getPosts();
      this.formatDate(this.date);
      this.getUserIdLogged();
      this.isConnected();
    },
    methods: {
      async getPosts() {
        // Récupération du token du localStorage
        const token = localStorage.getItem('token');
        const accessToken = JSON.parse(token);
        
        const posts = await axios.get(this.$api.POST_GET_ALL, {
          // Ajout du header Authorization
          headers: {
            Authorization: 'Bearer ' + accessToken,
          }
        });
        this.posts = await posts.data;
      },
      formatDate(date){
        return dayjs(date).format('DD/MM/YYYY');
      },
      getUserIdLogged(){        
        this.userId = this.$route.query.userId;
        return this.userId;
      },
      isConnected(){
        this.getUserIdLogged() ? this.logged = true : this.logged = false;
      },      
    }
}
</script>

<style lang="scss" src="../assets/scss/connexion.scss">
  
</style>