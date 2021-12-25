const express = require('express');
const userController = require('../controller/user');
const commentController = require("../controller/comment");
const bodyParser = require('body-parser');

const router = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });


router.post('/signup', userController.signup);
router.get('/login', userController.login);
// router.get('/users/:id/comments', commentController.getCommentsUser);



module.exports = router;