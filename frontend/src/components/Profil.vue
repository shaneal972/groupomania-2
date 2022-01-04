<template>
  <div class="container">
    <header class="row mt-2 pb-2 justify-content-center">
      <img class="w-75 logo" alt="Groupomania logo" src="../assets/icon-left-font.svg">
    </header>
    <div class="main row justify-content-center pt-2">
      <section class="header row justify-content-center">
        <h1 class="fw-bolder mb-0">Notre forum - Groupomania</h1>
        <div class="break mb-2"></div>
        <nav class="d-flex w-75 flex-column flex-sm-row gap-3 justify-content-around align-items-center" >
          <router-link v-if="getUserStore" :to="{name:'create-post', params:{idUser: getUserStore.id}}" class="btn shan-btn nav-link">Ajouter un article</router-link>
          <router-link v-else :to="{name:'login'}" class="nav-link shan-bg">Se connecter</router-link>
          <router-link v-if="getUserStore" :to="{name:'profil'}" class="nav-link shan-bg">Profil</router-link>
          <router-link v-else :to="{name:'signup'}" class="nav-link shan-bg">S'inscrire</router-link>
          <button v-if="getUserStore" class="btn shan-btn nav-link" @click="logout()" >Se déconnecter</button>
        </nav>
        <div class="break mb-3 mt-2"></div>
          <p v-if="getUserStore" class="d-flex justify-content-center">
            Bienvenue {{ getUserStore.name }} &nbsp;
            <img v-if="getRole() === 'moderateur'" src="../assets/user-tie-solid.svg" alt="Icone de modérateur" width="18" height="18" title="Modérateur">
            <span v-if="getRole() === 'moderateur'">&nbsp;:&nbsp; modérateur.</span>
          </p>
          <p v-if="getUserStore" class="d-flex justify-content-center m-0">
            <router-link :to="{name:'login'}" class="text-decoration-none text-info">Changer d'utilisateur</router-link>
          </p>
        <div v-if="getUserStore" class="break mb-5"></div>
      </section>
      <section class="body w-75">
        <div>
          <p class="text-muted">
              Vous êtes sur la page de votre profil. <br>
              Où vous pouvez voir vos informations.
          </p>
          <hr>
          <div class="justify-content-center p-0 m-0">
            <div class="card mb-3">
              <div class="row">
                <div class="col-md-4">
                  <img src="../assets/person.svg" class="img-fluid rounded-start" alt="Icône d'une personne">
                  <p class="card-text"><small class="text-muted">{{ getUserStore.role.libelle }}</small></p>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{{ getUserStore.name }}</h5>
                    <div class="card-text d-flex justify-content-evenly">
                      <div><span class="badge rounded-pill bg-danger">{{ totalPosts }}</span>&nbsp;&nbsp;Article<span v-if="totalPosts > 1">s</span></div>
                      <div><span class="badge rounded-pill bg-success">{{ totalComments }}</span>&nbsp;&nbsp;Commentaire<span v-if="totalComments > 1">s</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
// import dayjs from 'dayjs';
// import { mapState } from 'vuex';
// const cors = require('cors');



export default {
    name: 'Profil',
    data(){
      return {
        idUser: null,
        totalComments: 0,
        totalPosts: null,
        comments: null,
        posts: null
      }
    },
    mounted(){
      this.getCommentsUser();
      this.getPostsUser();
    },
    methods: {
      getCommentsUser(){
        this.idUser = this.getUserStore.id;
        axios.post(
          this.$api.COMMENT_USER_GET_ALL, 
          { 
             id: this.idUser  
          }
        )
        .then((response) => {
          this.totalComments = response.data.length;
          this.comments = response.data;
        })
        .catch((error) => {
          error.message
        })
      },
      getPostsUser(){
        this.idUser = this.getUserStore.id;
        axios.post(
          this.$api.POST_USER_GET_ALL, 
          { 
             id: this.idUser  
          }
        )
        .then((response) => {
            this.totalPosts = response.data.length
            this.posts = response.data
        })
        .catch((error => {error.message}))
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
      getUserStore(){
        return this.$store.state.user;
      }
    }
}
</script>

<style lang="scss" src="../assets/scss/connexion.scss">
  
</style>