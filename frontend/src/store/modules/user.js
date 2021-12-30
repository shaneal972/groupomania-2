

const state = {
    user: {
        name: '',
        email: '',
        password: ''
    },
    accessToken: ''
};
const getters = {
    user (state) {
        return state.user;
    },
    accessToken(state) {
        return state.accessToken;
    }
};
const mutations = {
    LOGIN_USER(state, payload) {
        state.user = payload;
    }
};
const actions = {};

export default {
    state,
    getters,
    mutations,
    actions
}