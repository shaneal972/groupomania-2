const express = require('express');
const commentController = require('../controller/comment');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/posts/:idPost/users/:idUser', auth, commentController.createUserCommentPost);
router.get('/posts/:id', commentController.getCommentsPost);
router.get('/users/:id', commentController.getCommentsUser);
router.get('/', commentController.getComments);


module.exports = router;