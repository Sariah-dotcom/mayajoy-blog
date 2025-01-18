import express from 'express';
import { createComment, likeComment, editComment, deleteComment, getComments } from '../controllers/comment.controller.js';
import { getPostComments } from '../controllers/comment.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();
router.post('/create', verifyToken, createComment )
router.get('/getPostComments/:postId', getPostComments )
router.get('/getcomments', verifyToken, getComments);
router.put('/likeComment/:commentId', verifyToken, likeComment )
router.put('/editComment/:commentId', verifyToken, editComment);
router.delete('/deleteComment/:commentId', verifyToken, deleteComment);

export default router;