import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

let router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: require('../components/Home.vue').default,
            name: 'login'
        },
        {
            path: '/signup',
            component: require('../components/Signup.vue').default,
            name: 'signup'
        },
        {
            path: '/posts',
            component: require('../components/Posts.vue').default,
            name: 'posts'
        },
        {
            path: '/posts/:id',
            component: require('../components/ReadPost.vue').default,
            name: 'read-post'
        },
    ]
});


export default router