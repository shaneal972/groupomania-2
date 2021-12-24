const URL_API = process.env.VUE_APP_URL + "api/";

export const api = {

    // User
    USER_LOGIN: URL_API + "users/login",
    USER_SIGNUP: URL_API + "users/signup",
    
    // Post
    POST_CREATE: URL_API + "posts/create/:idUser",
    POST_GET_ONE: URL_API + `posts/:id`,
    POST_UPDATE: URL_API + `posts/:id`,
    POST_DELETE: URL_API + `posts/:id`,
    POST_GET_ALL: URL_API + "posts/",
    
    // Comment
    COMMENT_CREATE: URL_API + `comments/posts/:postId/users/:userId`,
    COMMENT_GET_ONE: URL_API + `comments/:id`,
    COMMENT_UPDATE: URL_API + `comments/:id`,
    COMMENT_DELETE: URL_API + `comments/:id`,
    COMMENT_GET_ALL: URL_API + "comments/",
}