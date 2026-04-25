/************************** imports **************************/
import express from 'express';
import {getAllPosts, getSinglePost, createPostAdmin, getAllPostsAdmin,
getSinglePostAdmin, updatePostAdmin, deletePostAdmin} from '../controllers/postController.js';
import {authenticateUser, authorizeRoles} from '../middlewares/authMiddleware.js';

/************************* variables *************************/
const router = express.Router();

/**************************** routes ****************************/
router.get('/posts', getAllPosts);
router.get('/posts/:postId', getSinglePost);

/************************* admin routes *************************/
router.post('/admin/posts', createPostAdmin);
router.get('/admin/posts', getAllPostsAdmin);
router.get('/admin/posts/:postId', getSinglePostAdmin);
router.put('/admin/posts/:postId', updatePostAdmin);
router.delete('/admin/posts/:postId', deletePostAdmin);

export default router;