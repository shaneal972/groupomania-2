import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

let router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/signup',
            component: require('../components/Signup.vue').default,
            name: 'signup'
        },
        {
            path: '/',
            component: require('../components/Home.vue').default,
            name: 'login'
        },
    ]
});


export default router