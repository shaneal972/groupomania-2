const Post = require('../models').Post;

/**
 * Permet de récupérer tous les posts
 */
exports.getPosts = async (req, res, next) => {
    const posts = await Post.findAll();
    if (posts.length > 0) {
        res.status(200).send(posts);
    } else {
        res.send('Pas de posts dans la bdd');
    }
};

exports.createPost = {};
exports.getOnePost = {};
exports.updatePost = {};
exports.deletePost = {};