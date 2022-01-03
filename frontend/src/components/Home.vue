<template>
  <div class="container">
    <header class="row mt-2 pb-2 justify-content-center">
      <img class="w-75 logo" alt="Groupomania logo" src="../assets/icon-left-font.svg">
    </header>
    <div class="main row justify-content-center pt-2">
      <section class="header row justify-content-center">
        <h1 class="fw-bolder mb-0">Notre forum - Groupomania</h1>
        <div class="break mb-2"></div>
        <!-- <nav class="d-flex justify-content-evenly mb-2 mt-2" >
        </nav> -->
        <nav class="d-flex w-75 flex-column flex-sm-row gap-3 justify-content-around align-items-center" >
          <router-link v-if="userStore" :to="{name:'create-post', params:{idUser: this.user}}" class="btn shan-btn nav-link">Ajouter un article</router-link>
          <router-link v-else :to="{name:'login'}" class="nav-link shan-bg">Se connecter</router-link>
          <router-link v-if="userStore" :to="{name:'profile'}" class="nav-link shan-bg">Profile</router-link>
          <router-link v-else :to="{name:'signup'}" class="nav-link shan-bg">S'inscrire</router-link>
           <router-link v-if="userStore" :to="{name: 'posts'}" class="btn shan-btn nav-link" @click="logout()" >Se déconnecter</router-link>
        </nav>
        <div class="break mb-3 mt-2"></div>
          <p v-if="userStore" class="d-flex justify-content-center">
            Bienvenue {{ userStore.name }} &nbsp;
            <img v-if="getRole() === 'moderateur'" src="../assets/user-tie-solid.svg" alt="Icone de modérateur" width="18" height="18" title="Modérateur">
          </p>
        <div class="break mb-5"></div>
      </section>
      <section class="body">
        <div class="card mb-5" v-for="post in posts" :key="post.id">
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <h6 class="card-subtitle mb-2 text-muted shan-fz">Ecrit par : {{post.User.name}}</h6>
            <p class="card-date text-start mb-1 mt-4 shan-fz">Posté le : {{ formatDate(post.createdAt)  }}</p>
            <p class="card-text text-start shan-pt mb-5">{{ post.content.substring(0, 300)  }}</p>
            <div class="d-flex justify-content-end w-75">
              <div class="card-link position-relative text-decoration-none text-dark text-opacity-75" title="Commenter">
                <img src="../assets/comments.png" width="24" height="24" alt="Icône pour poster un commentaire">
                <span class="position-absolute top-0 start-0 translate-middle badge bg-info">{{ post.Comments.length}}</span>
                <router-link :to="{name: 'create_comment', params: { idUser: 10, idPost: 8 }}" class="text-opacity-75 text-decoration-none text-dark">
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
// import { mapState } from 'vuex';
// const cors = require('cors');



export default {

    name: 'Home',
    data () {
        return {
          posts: {},
          user: null
        }
    },
    created(){
      this.getUserStorage();
    },
    mounted () {
      this.getPosts();
      this.formatDate(this.date);
    },
    methods: {
      getPosts() {
        // Récupération du token depuis le store 
        const user = JSON.parse(localStorage.getItem('authUser'));
        const accessToken = user.user.token;

        axios.get(this.$api.POST_GET_ALL, {
          // Ajout du header Authorization
          headers: {
            Authorization: 'Bearer ' + accessToken,
          }
        })
        .then((response) => {
          this.posts = response.data.posts;
          this.posts.forEach(post => {
            if(post.User.id === this.$route.query.userId){
              this.user = post.User;
            }
          })
        // this.$store.dispatch('getUser', this.user);
        
        })
        .catch((error) => {console.log(error)});
      },
      formatDate(date){
        return dayjs(date).format('DD/MM/YYYY');
      },
      getUserStorage () {
        this.user = JSON.parse(localStorage.getItem('authUser')).user.id;
        return this.user;
      },
      getRole(){
        if(this.$store.state.user.id){
          return this.$store.getters.getRole;
        }
      },
      logout(){
        this.$store.dispatch('logout');
        localStorage.removeItem("authUser");
        this.$router.push("/");
      }
    },
    computed: {
      userStore(){
        return this.$store.state.user;
      },

    }
}
</script>

<style lang="scss" src="../assets/scss/connexion.scss">
  
</style>