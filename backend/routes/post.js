const express = require('express');
const postController = require('../controller/post');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/create/:idUser', auth, postController.createPost);
router.put('/:id', auth, postController.updatePost);
router.delete('/:id', auth, postController.deletePost);
router.get('/:id', auth, postController.getOnePost);
router.get('/', auth, postController.getPosts);

module.exports = router;