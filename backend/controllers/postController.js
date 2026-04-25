
import Post from '../models/postModel.js';
import asyncHandler from '../utils/asyncHandlerUtil.js';
import messageHandler from '../utils/messageHandlerUtil.js';


export const getAllPosts = asyncHandler(async (req, res, next) => {

   res.status(200).json({
      message: 'Successfully retrieved all posts!',
      success: true,
   });
});

export const getSinglePost = asyncHandler(async (req, res, next) => {
   res.status(200).json({
      message: 'Successfully retrieved single post!',
      success: true,
   });
});

export const createPostAdmin = asyncHandler(async (req, res, next) => {
   res.status(200).json({
      message: 'Admin - successfully created post!',
      success: true,
   });
});

export const getAllPostsAdmin = asyncHandler(async (req, res, next) => {

   res.status(200).json({
      message: 'Admin - successfully retrieved all posts!',
      success: true,
   })
})

export const getSinglePostAdmin = asyncHandler(async (req, res, next) => {

   res.status(200).json({
      message: 'Admin - successfully retrieved single post!',
      success: true,
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