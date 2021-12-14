const express = require('express');
const userController = require('../controller/user');
const commentController = require("../controller/comment");

const router = express.Router();


router.post('/signup', userController.signup);
router.post('/', userController.login);
// router.get('/users/:id/comments', commentController.getCommentsUser);



module.exports = router;