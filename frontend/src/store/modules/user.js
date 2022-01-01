const state = {
    user: {
        id: null,
        name: null,
        email: null,
        password: null
    },
    accessToken: null,
    role: null
};
const getters = {
    getAccessToken(state) {
        return state.accessToken;
    },
    getUser(state) {
        return state.user;
    }
};
const mutations = {
    LOGIN_USER(state, payload) {
        state.user = payload;
    },
    SET_ROLE(state, role) {
        state.role = role;
    },
    ADD_TOKEN(state, payload) {
        state.accessToken = payload;
    },
    LOGOUT_USER(state) {
        state.user = null;
    }

};
const actions = {
    getInfosUser({commit}, userInfos) {
        commit('LOGIN_USER', userInfos);
    },
    getRoleUser({ commit }, userRole) {
        commit('SET_ROLE', userRole)
    },
    addToken({ commit }, token) {
        commit('ADD_TOKEN', token)
    },
    logout({ commit }) {
        commit('LOGOUT_USER')
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}