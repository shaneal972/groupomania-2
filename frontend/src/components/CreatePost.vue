<template>
  <div class="container">
    <header class="row mt-2 pb-2 justify-content-center">
      <img @click="$router.push('/')" class="w-75 logo" alt="Groupomania logo" src="../assets/icon-left-font.svg">
    </header><!-- Fin du header -->
    <div class="main row pt-2 col-md-8 offset-md-2">
      <section class="header row justify-content-center">
        <!-- <div class="break mb-3"></div> -->
        <router-link :to="{name: 'posts'}" title="Retour vers l'accueil du site" class="mb-2 w-50 shan-bg text-opacity-75 text-decoration-none">
          Accueil
        </router-link>
        <div class="break mb-3"></div>
      </section>
        <p class="text-start fz-9">
            Vous avez quelque chose à partager pour enrichir et animer notre forum. <br>
            Alors faîtes-le en remplissant tous les champs de ce formulaire.
        </p>
        <form @submit.prevent="createPost()">
            <div class="form-floating mb-3">
                <input type="text" class="form-control" v-model="title" id="title" placeholder="Titre">
                <label for="title">Titre de l'article</label>
            </div>
            <div class="form-floating mb-4">
                <textarea class="form-control shan-area" placeholder="Contenu" v-model="content" id="content"></textarea>
                <label for="content">Contenu de l'article</label>
            </div>
            <div class="input-group">
              <input type="submit" class="form-control btn-login" id="btn-submit" value="Créer l'article">
            </div>
        </form><!-- Fin de form -->
    </div><!-- Fin du main -->
    <footer class="row main col-md-8 offset-md-2">
      <p class="text-center">
        &copy; - ShanDev 2021
      </p>
    </footer>
  </div>
</template>

<script>
import axios from 'axios';
// import { mapGetters, mapActions } from 'vuex';

export default {
  
  name: 'CreatePost',
  data() {
    return {
      title: '',
      content: '',
      user: null,
      action: ''
    }
  },
  mounted() {
    // this.createPost();
    this.getToken();
  },
  methods: {
    getToken() {
      // Récupération du token du localStorage
      this.user = localStorage.getItem('authUser');
      return JSON.parse(this.user).user.token;
    },
    getUserId(){
      return this.$store.getters.getUserId;
    },
    async createPost () {
      
      const accessToken = this.getToken();
      const userId = this.getUserId();
      
      const title = this.title;
      const content = this.content;
      
      if (title !== '' && title !== null && content !== '' && content !== null){
        await axios.post(this.$api.POST_CREATE, 
          {
            title: title,
            content: content,
            userId: userId
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
      this.title = null;
      this.content = null;
      this.$router.push({
        path: '/', 
        query: {id: userId}
      });
    },
  },
}
</script>

<style lang="scss" src="../assets/scss/connexion.scss">
  
</style>