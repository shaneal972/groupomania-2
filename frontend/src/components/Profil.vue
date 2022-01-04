<template>
  <div class="container">
    <header class="row mt-2 pb-2 justify-content-center">
        <img @click="$router.push('/')" class="w-75 logo" alt="Groupomania logo" src="../assets/icon-left-font.svg">
    </header>
    <main class="row flex-column">
      <section class="header row justify-content-center">
        <h1 class="fw-bolder mb-0">Notre forum - Groupomania</h1>
        <div class="break mb-2"></div>
        <!-- <nav class="d-flex justify-content-evenly mb-2 mt-2" >
        </nav> -->
        <nav class="d-flex w-75 flex-column flex-sm-row gap-3 justify-content-around align-items-center" >
          <router-link v-if="userStore" :to="{name:'create-post', params:{idUser: this.idUser}}" class="btn shan-btn nav-link">Ajouter un article</router-link>
          <router-link v-else :to="{name:'login'}" class="nav-link shan-bg">Se connecter</router-link>
          <router-link v-if="userStore" :to="{name:'profil'}" class="nav-link shan-bg">Profil</router-link>
          <router-link v-else :to="{name:'signup'}" class="nav-link shan-bg">S'inscrire</router-link>
          <button v-if="userStore" class="btn shan-btn nav-link" @click="logout()" >Se déconnecter</button>
        </nav>
        <div class="break mb-3 mt-2"></div>
          <p v-if="userStore" class="d-flex justify-content-center">
            Bienvenue {{ userStore.name }} &nbsp;
            <img v-if="getRole() === 'moderateur'" src="../assets/user-tie-solid.svg" alt="Icone de modérateur" width="18" height="18" title="Modérateur">
            <span v-if="getRole() === 'moderateur'">&nbsp;:&nbsp; modérateur.</span>
          </p>
          <p v-if="userStore" class="d-flex justify-content-center m-0">
            <router-link :to="{name:'login'}" class="text-decoration-none text-info">Changer d'utilisateur</router-link>
          </p>
        <div v-if="userStore" class="break mb-5"></div>
    </section>
      <p class="text-muted">
          Vous êtes sur la page de votre profil. <br>
          Où vous pouvez voir vos informations.
      </p>
      <hr>
      <div class="row flex-row justify-content-center p-0 m-0">
        <div class="card mb-3  w-75" style="max-width: 540px;">
          <div class="row">
            <div class="col-md-4">
              <img src="../assets/person.svg" class="img-fluid rounded-start" alt="Icône d'une personne">
              <p class="card-text"><small class="text-muted">{{ userStore.role.libelle }}</small></p>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{ userStore.name }}</h5>
                <div class="card-text d-flex justify-content-evenly">
                  <div><span class="badge rounded-pill bg-danger">{{ totalPosts }}</span>&nbsp;&nbsp;Article<span v-if="totalPosts > 1">s</span></div>
                  <div><span class="badge rounded-pill bg-success">{{ totalComments }}</span>&nbsp;&nbsp;Commentaire<span v-if="totalComments > 1">s</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer class="row main">
      <p class="text-center">
        &copy; - ShanDev 2021
      </p>
    </footer>
  </div>
</template>

<script>
import axios from 'axios';

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
        this.idUser = this.userStore.id;
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
        this.idUser = this.userStore.id;
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
    },
    computed: {
      userStore(){
        return this.$store.state.user;
      }
    }
}
</script>

<style>

</style>