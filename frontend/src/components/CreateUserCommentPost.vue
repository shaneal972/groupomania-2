<template>
  <div class="container">
      <header class="row mt-2 pb-2 justify-content-center">
        <img @click="$router.push('/')" class="w-75 logo" alt="Groupomania logo" src="../assets/icon-left-font.svg">    
      </header><!-- Fin du header -->
      <div class="main row pt-2 col-md-8 offset-md-2">
        <p class="text-center fs-6">
            Vsus allez commenter un article de notre forum, soyez poli, 
            courtois et faîtes attention à l'orthographe.
        </p>
        <form @submit.prevent="createUserComment">
            <div class="form-floating mb-4">
                <textarea class="form-control shan-area" placeholder="Contenu" v-model="message" id="message"></textarea>
                <label for="message">Votre commentaire</label>
            </div>
            <div class="input-group">
          <input type="submit" class="form-control btn-login" id="btn-submit" v-bind:value="value">
        </div>
        </form><!-- Fin de form -->
      </div><!-- Fin du main -->
  </div>
</template>

<script>
import axios from 'axios';


export default {
    name: "CreateUserCommentPost",
    data () {
      return {
        value: 'AJOUTER LE COMMENTAIRE',
        userId: null,
        postId: null,
        message: '',
        title: ''
      }
    },
    mounted () {
      // this.createUserComment();
      this.getUserId();
      this.getPostId();
    },
    methods: {
      async createUserComment () {
        // Récupération du token depuis le store 
        const user = JSON.parse(localStorage.getItem('authUser'));
        const accessToken = user.user.token;

        // Récupérer le message
        const message = this.message;
        // Passer ce message au backend avec axios
        try{
          if (message !== '' && message !== null){
            await axios.post(this.$api.COMMENT_CREATE, 
              {
                message: message,
                userId: this.getUserId(),
                postId: this.getPostId()
              },
              {
                headers: {
                  Authorization: 'Bearer ' + accessToken,
                }
              }
            );
          } else {
            console.log("Vous devez remplir tous les champs !")
          }
          this.message = null;
        }catch(err){
          console.log({err: err.message});
        }
      },
      getUserId () {
        return this.$store.getters.getUserId;
      },
      getPostId () {
        return this.postId = this.$route.params.idPost;
      },
    }
}
</script>

<style>

</style>