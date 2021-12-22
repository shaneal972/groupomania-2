<template>
  <div class="container">
    <header class="row mt-2 pb-2 justify-content-center">
      <img @click="$router.push('/')" class="w-75 logo" alt="Groupomania logo" src="../assets/icon-left-font.svg">    
    </header><!-- Fin du header -->
    <div class="main row pt-2 col-md-8 offset-md-2">
        <p class="text-start fz-9">
            Vous avez quelque chose à partager pour enrichir et animer notre forum. <br>
            Alors faîtes-le en remplissant tous les champs de ce formulaire.
        </p>
        <form>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="title" placeholder="Titre">
                <label for="title">Titre de l'article</label>
            </div>
            <div class="form-floating mb-4">
                <textarea class="form-control shan-area" placeholder="Contenu" id="content"></textarea>
                <label for="content">Contenu de l'article</label>
            </div>
            <div class="input-group">
          <input @click="$router.push('/posts')" type="submit" class="form-control btn-login" id="btn-submit" value="Créer l'article">
        </div>
        </form><!-- Fin de form -->
    </div><!-- Fin du main -->
  </div>
</template>

<script>
export default {
    name: 'CreatePost',
    data() {
      return {
        title: '',
        content: '',
        userId: null
      }
    },
    methods: {
      createPost: () => {

      }
    }
}
</script>

<style>

</style>