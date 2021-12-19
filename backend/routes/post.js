const express = require('express');
const postController = require('../controller/post');

const router = express.Router();

// router.post('/', postController.createPost);
// router.put('/posts/:id', postController.updatePost);
// router.delete('/posts/:id', postController.deletePost);
// router.get('/posts/:id', postController.getOnePost);
router.get('/', postController.getPosts);

module.exports = router;