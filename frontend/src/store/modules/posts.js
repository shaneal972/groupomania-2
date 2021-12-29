

const state = {
    post: {
        title: '',
        message: '',
    },
    posts: []
};
const getters = {
    post(state) {
        return state.post;
    }
};
const mutations = {
    GETALL_POST(state, posts) {
        state.posts.push(posts);
    }
};
const actions = {
    getAllPosts: (commit) => {
        //Appel au backend gràce à axios

        // Utilisation de la mutation
        commit('GETALL_POST');
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}