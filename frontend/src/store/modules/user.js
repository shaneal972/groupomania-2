

const state = {
    user: {
        name: '',
        email: '',
        password: ''
    }
};
const getters = {
    user (state) {
        return state.user;
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