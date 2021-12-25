const express = require('express');
const queryController = require('../controller/query');


const router = express.Router();


router.get('/title', queryController.getPostTitle);
// router.get('/users/:id/comments', commentController.getCommentsUser);



module.exports = router;