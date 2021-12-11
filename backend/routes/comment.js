const express = require('express');
const commentController = require('../controllers/comment');

const router = express.Router();


router.post('posts/:id/comments', commentController.createCommentPost);
router.get('posts/:id/comments', commentController.getCommentsPost);



module.exports = router;