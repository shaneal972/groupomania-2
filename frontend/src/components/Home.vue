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
          <router-link v-if="getUserStore" :to="{name:'create-post', params:{idUser: this.user}}" class="btn shan-btn nav-link">Ajouter un article</router-link>
          <router-link v-else :to="{name:'login'}" class="nav-link shan-bg">Se connecter</router-link>
          <router-link v-if="getUserStore" :to="{name:'profil'}" class="nav-link shan-bg">Profil</router-link>
          <router-link v-else :to="{name:'signup'}" class="nav-link shan-bg">S'inscrire</router-link>
          <button v-if="getUserStore" class="btn shan-btn nav-link" @click="logout()" >Se déconnecter</button>
        </nav>
        <div class="break mb-3 mt-2"></div>
          <p v-if="getUserStore" class="d-flex justify-content-center">
            Bienvenue {{ getUserStore.name }} &nbsp;
            <img v-if="getRole() === 'modérateur'" src="../assets/user-tie-solid.svg" alt="Icone de modérateur" width="18" height="18" title="Modérateur">
            <span v-if="getRole() === 'modérateur'">&nbsp;:&nbsp; modérateur.</span>
          </p>
          <p v-if="getUserStore" class="d-flex justify-content-center m-0">
            <router-link :to="{name:'login'}" class="text-decoration-none text-info">Changer d'utilisateur</router-link>
          </p>
        <div v-if="getUserStore" class="break mb-5"></div>
      </section>
      <section class="body w-75">
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
                <span class="text-opacity-75 text-decoration-none text-dark">
                  Commentaires
                </span>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <router-link class="mb-2 mt-2 p-0" :to="{ name: 'read-post', params: { id: post.id }}">
              <button v-if="isDisabled" class="shan-btn-disabled p-2" :disabled='isDisabled'>Lire L'article</button>
              <button v-else class="shan-btn p-2">Lire L'article</button>
            </router-link>
          </div>
        </div>
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
import axios from 'axios';
import dayjs from 'dayjs';
// import { mapState } from 'vuex';
// const cors = require('cors');



export default {

    name: 'Home',
    data () {
        return {
          posts: {},
          user: null,
          accessToken: null,
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
        if(localStorage.getItem('authUser')) {
          const user = JSON.parse(localStorage.getItem('authUser'));
          this.accessToken = user.user.token;
          
        } else {
          this.$router.push('/users/login');
        }
        axios.get(this.$api.POST_GET_ALL, {
            // Ajout du header Authorization
            headers: {
              Authorization: 'Bearer ' + this.accessToken,
            }
          })
          .then((response) => {
            this.posts = response.data.posts;
            console.log(this.posts);
            this.posts.forEach(post => {
              if(post.User.id === this.$route.query.userId){
                this.user = post.User;
              }
            })
          })
          .catch((error) => {console.log(error)});
      },
      formatDate(date){
        return dayjs(date).format('DD/MM/YYYY');
      },
      getUserStorage() {
        if(localStorage.getItem('authUser') !== null) {
          return JSON.parse(localStorage.getItem('authUser')).user;
        }
      },
      getRole(){
        if(this.$store.state.user.id){
          return this.$store.getters.getRole;
        }
      },
      logout(){
        this.$store.dispatch('logout');
        localStorage.removeItem("authUser");
        this.$router.push("/users/login");
      }
    },
    computed: {
      // getuserStore
      getUserStore(){
        return this.$store.state.user;
      },
      isDisabled(){
        return !this.getUserStore;
      }
    }
}
</script>

<style lang="scss" src="../assets/scss/connexion.scss">
  
</style>