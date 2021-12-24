import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

let router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: require('../components/Home.vue').default,
            name: 'posts'
        },
        {
            path: '/login',
            component: require('../components/Login.vue').default,
            name: 'login'
        },
        {
            path: '/signup',
            component: require('../components/Signup.vue').default,
            name: 'signup'
        },
        {
            path: '/posts/:id',
            component: require('../components/ReadPost.vue').default,
            name: 'read-post'
        },
        {
            path: '/posts/create/:idUser',
            component: require('../components/CreatePost.vue').default,
            name: 'create-post'
        },
    ]
});


export default router