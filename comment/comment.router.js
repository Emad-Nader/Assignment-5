const expreess = require('express');
const router = expreess.Router();
const commentController = require('./comment.controller.js');


router.post('/bulk', commentController.createBulkComments);
router.patch('/:id', commentController.updateCommentContent);
router.post('/find-or-create', commentController.findOrCreateComment);
router.get('/search', commentController.searchCommentsByWord);
router.get('/newest/:postId', commentController.getNewestCommentsForPost);
router.get('/details/:id', commentController.getCommentDetailsById);




module.exports = router;