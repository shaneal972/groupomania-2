import Vue from "vue";
import VueRouter from "vue-router";
import ReadOnePost from "../components/ReadOnePost.vue";

Vue.use(VueRouter);

let router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: require('../components/Home.vue').default,
            name: 'posts',
            // params: {userId: 0}
        },
        {
            path: '/users/login',
            component: require('../components/Login.vue').default,
            name: 'login'
        },
        {
            path: '/users/signup',
            component: require('../components/Signup.vue').default,
            name: 'signup'
        },
        {
            path: '/users/profile',
            component: require('../components/Profile.vue').default,
            name: 'profile'
        },
        {
            path: '/posts/:id',
            component: ReadOnePost,
            name: 'read-post'
        },
        {
            path: '/posts/:id',
            component: require('../components/UpdatePost.vue').default,
            name: 'update-post'
        },
        {
            path: '/posts/:id',
            name: 'delete-post'
        },
        {
            path: '/posts/create/:idUser',
            component: require('../components/CreatePost.vue').default,
            name: 'create-post'
        },
        {
            path: '/comments/posts/:idPost/users/:idUser',
            component: require('../components/CreateUserCommentPost.vue').default,
            name: 'create_comment'
        }
    ]
});


export default router