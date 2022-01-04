<template>
  <div class="container">
    <header class="row mt-2 pb-2 justify-content-center">
        <img @click="$router.push('/')" class="w-75 logo" alt="Groupomania logo" src="../assets/icon-left-font.svg">
        <nav></nav>
    </header>
    <main class="row flex-column">
      <h1 class="fs-4">Le forum de notre entreprise</h1> 
      <p class="text-muted">
          Vous êtes sur la page de votre profile. <br>
          Où vous pouvez mettre à jour vos informations.
      </p>
      <hr>
      <div class="row flex-row justify-content-center p-0 m-0">
        <div class="card mb-3  w-75" style="max-width: 540px;">
          <div class="row">
            <div class="col-md-4">
              <img src="../assets/person.svg" class="img-fluid rounded-start" alt="">
              <p class="card-text"><small class="text-muted">{{ userStore.role.libelle }}</small></p>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{ userStore.name }}</h5>
                <div class="card-text d-flex justify-content-evenly">
                  <div><span class="badge rounded-pill bg-danger">{{ totalPosts }}</span>&nbsp;&nbsp;Articles</div>
                  <div><span class="badge rounded-pill bg-success">{{ totalComments }}</span>&nbsp;&nbsp;Commentaires</div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
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
      }
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