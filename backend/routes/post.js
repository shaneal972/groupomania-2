const express = require('express');
const postController = require('../controller/post');

const router = express.Router();

router.post('/create', postController.createPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);
router.get('/:id', postController.getOnePost);
router.get('/', postController.getPosts);

module.exports = router;