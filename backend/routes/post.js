const express = require('express');
const postController = require('../controller/post');

const router = express.Router();

router.get('/posts', postController.getPosts);
// router.post('/posts', postController.createPost);
// router.get('/posts/:id', postController.getOnePost);
// router.put('/posts/:id', postController.updatePost);
// router.delete('/posts/:id', postController.deletePost);

module.exports = router;