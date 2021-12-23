const express = require('express');
const commentController = require('../controller/comment');

const router = express.Router();

router.post('/posts/:idPost/users/:idUser/', commentController.createUserCommentPost);
router.get('/posts/:id', commentController.getCommentsPost);
router.get('/users/:id', commentController.getCommentsUser);
router.get('/', commentController.getComments);



module.exports = router;