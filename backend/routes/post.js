const express = require('express');
const postController = require('../controllers/post');

const router = express.Router();

router.post('/posts', postController.createPost);
router.get('/posts', postController.getPosts);
router.get('/posts/:id', postController.getOnePost);
router.put('/posts/:id', postController.updatePost);
router.delete('/posts/:id', postController.deletePost);

module.exports = router;