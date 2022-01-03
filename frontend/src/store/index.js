import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
  },
  getters: {
    getAccessToken(state) {
      return state.user.token;
    },
    getRole(state) {
      return state.user.role.libelle;
    },
    getUserId(state){
      return state.user.id;
    }
  },
  mutations: {
    SET_ROLE(state, role) {
      state.role = role;
    },
    SET_TOKEN(state, payload) {
      state.accessToken = payload;
    },
    ADD_USER(state, infosUser){
      state.user = infosUser;
    },
    DEL_USER(state){
      state.user = null;
    }

  },
  actions: {
    addUser({ commit }, userInfos) {
      commit('ADD_USER', userInfos);
    },
    // setRoleUser( {commit}, userRole) {
    //   commit('SET_ROLE', userRole)
    // },
    // setToken( {commit}, token) {
    //   commit('SET_TOKEN', token)
    // },
    logout({ commit }) {
      commit('DEL_USER');
    }
  }
})
