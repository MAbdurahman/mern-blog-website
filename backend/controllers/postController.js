
import Post from '../models/postModel.js';
import asyncHandler from '../utils/asyncHandlerUtil.js';
import messageHandler from '../utils/messageHandlerUtil.js';


export const getAllPosts = asyncHandler(async (req, res, next) => {
   const posts = await Post.find({});
   if (!posts.length) {
      return next(messageHandler(res, false, 'No posts found!', 204));
   }

   res.status(200).json({
      message: 'Successfully retrieved all posts!',
      success: true,
      posts: posts
   });
});

export const getSinglePost = asyncHandler(async (req, res, next) => {
   const {postId} = req.params;

   const post = await Post.findById(postId);
   if (!post) {
      return next(messageHandler(res, false, 'Post not found!', 404));
   }


   res.status(200).json({
      message: 'Successfully retrieved single post!',
      success: true,
      post: post

   });
});

export const createPostAdmin = asyncHandler(async (req, res, next) => {
   res.status(200).json({
      message: 'Admin - successfully created post!',
      success: true,
   });
});

export const getAllPostsAdmin = asyncHandler(async (req, res, next) => {
   const posts = await Post.find().sort({ title: 1 });
   const postsCount = posts.length ? posts.length : 0;

   res.status(200).json({
      message: 'Admin - successfully retrieved all posts!',
      postsCount: postsCount,
      success: true,
      posts: posts
   })
})

export const getSinglePostAdmin = asyncHandler(async (req, res, next) => {
   const {postId} = req.params;
   const post = await Post.findById(postId);
   if (!post) {
      return next(messageHandler(res, false, 'Post not found!', 404));
   }

   res.status(200).json({
      message: 'Admin - successfully retrieved single post!',
      success: true,
      post: post
   });
});

export const updatePostAdmin = asyncHandler(async (req, res, next) => {

   res.status(200).json({
      message: 'Admin - successfully updated post!',
      success: true,
   });
});

export const deletePostAdmin = asyncHandler(async (req, res, next) => {
   res.status(200).json({
      message: 'Admin - successfully deleted post!',
      success: true,
   });
});