<template>
  <div class="container">
    <header class="row mt-2 pb-2 justify-content-center">
      <img @click="$router.push('/')" class="w-75 logo" alt="Groupomania logo" src="../assets/icon-left-font.svg">
    </header><!-- Fin du header -->
    <div class="main row pt-2 col-md-8 offset-md-2">
      <section class="header row justify-content-center">
        <!-- <div class="break mb-3"></div> -->
        <router-link :to="{name: 'posts', params: {userId: this.userId}}" title="Retour vers l'accueil du site" class="mb-2 w-50 shan-bg text-opacity-75 text-decoration-none">
          Accueil
        </router-link>
        <div class="break mb-3"></div>
      </section>
        <p class="text-start fz-9">
            Vous avez quelque chose à partager pour enrichir et animer notre forum. <br>
            Alors faîtes-le en remplissant tous les champs de ce formulaire.
        </p>
        <form @submit.prevent="updatePost(getPostId())">
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="title" v-model="title" required>
                <label for="title">Titre de l'article</label>
            </div>
            <div class="form-floating mb-4">
                <textarea class="form-control shan-area" placeholder="Contenu" required id="content" v-model="content"></textarea>
                <label for="content">Contenu de l'article</label>
            </div>
            <input type="hidden" name="" :value="this.postId">
            <div class="input-group">
              <input type="submit" class="form-control btn-login" id="btn-submit" value="Modifier l'article">
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

export default {
  
  name: 'UpdatePost',
  data() {
    return {
      title: '',
      content: '',
      userId: null,
      postId: null
    }
  },
  mounted() {
    this.getPostId();
    this.getToken();
    this.getPost();
    this.getUserId();
    // this.getTitle();
    // this.updatePost();
  },
  methods: {
    getPost(){
      const accessToken = this.getToken();
      const idPost = this.getPostId();

      axios.get(this.$api.POST_GET_ONE, { 
        params: { id: idPost },
          // Ajout du header Authorization
        headers: {
          Authorization: 'Bearer ' + accessToken,
        }
      })
      .then((response) => {
        const result = response.data;

        this.title = result.post.title;
        this.content = result.post.content;
      })
      .catch((error) => {
        console.log(error.message);
      })
      
    },
    getUserId(){
      return this.userId = this.$store.getters.getUserId;
    },
    getPostId(){
      return this.postId = this.$route.params.id;
    },
    getToken() {
      // Récupération du token du localStorage
      const user = localStorage.getItem('authUser');
      return JSON.parse(user).user.token;
    },
    async updatePost(id) {
      const accessToken = this.getToken();
      if (this.title !== null && this.content !== null && this.title !== '' && this.content !== '') {
        console.log("I'm here");
        const title = this.title;
        const content = this.content;
        const headers = {
          Authorization: 'Bearer ' + accessToken,
        };
        const payload = {
          title: JSON.stringify({title, id}),
          content: content
        };
        try {
          console.log("I'm here");
          await axios.put(this.$api.POST_UPDATE, payload, {headers});
        }catch(error) {
          console.log(error.message);
        }
      } else {
        console.log("Vous devez remplir les champs !");
      }
      this.title = null;
      this.content = null;
      this.$router.push({
        path: '/',
        query: {id: this.getUserId()}
      });
    },
  },
  computed: {
    // mettre dans method
    
  }
}
</script>

<style lang="scss" src="../assets/scss/connexion.scss">
  
</style>