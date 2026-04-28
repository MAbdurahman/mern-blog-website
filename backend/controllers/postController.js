
import Post from '../models/postModel.js';
import asyncHandler from '../utils/asyncHandlerUtil.js';
import messageHandler from '../utils/messageHandlerUtil.js';
import APIFeatures from '../utils/apiFeaturesUtil.js';

export const getAllPosts = asyncHandler(async (req, res, next) => {
   const resPerPage = 4;
   const postsCount = await Post.countDocuments();

   const apiFeatures = new APIFeatures(Post.find(), req.query)
      .search()
      .filter()

   let posts = await apiFeatures.query;
   let filteredPosts = posts.length;

   apiFeatures.pagination(resPerPage);
   posts = await apiFeatures.query.clone();

   res.status(200).json({
      message: 'Posts retrieved successfully!',
      success: true,
      filteredPosts: filteredPosts,
      postsCount: postsCount,
      resultsPerPage: resPerPage,
      posts,
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
   req.body.author = req.user._id;
   const post = await Post.create(req.body);

   res.status(201).json({
      message: 'Admin - product created successfully!',
      success: true,
      post
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

   const { postId } = req.params;
   let post = await Post.findById(postId);

   if (!post) {
      return next(messageHandler(res, 'Post not found!', 404));
   }

   post = await Post.findByIdAndUpdate(postId, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
   });

   res.status(200).json({
      message: 'Admin - post updated successfully!',
      success: true,
      post,
   });
});

export const deletePostAdmin = asyncHandler(async (req, res, next) => {
   const { postId } = req.params;
   let post = await Post.findById(postId);

   if (!post) {
      return next(messageHandler(res, 'Post not found!', 404));
   }

   await Post.deleteOne({_id: post._id});

   res.status(200).json({
      message: 'Admin - post deleted successfully!',
      success: true,
      post: {},
   });
});