import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import asyncHandler from '../utils/asyncHandlerUtil.js';
import messageHandler from '../utils/messageHandlerUtil.js';
import ErrorHandler from '../utils/errorHandlerUtil.js';

export const authenticateBearerToken = asyncHandler(async (req, res, next) => {
   let token;
   let authHeader = req.headers.authorization || req.headers.Authorization;

   if (authHeader && authHeader.startsWith('Bearer ')) {
      // token = authHeader.substring(2);
      token = authHeader.split(' ')[1];
      if (!token) {
         return messageHandler('User must be logged in', 401);
      }
   }
   const decodedData = jwt.verify(token, process.env.JWT_SECRET);
   req.user = await User?.findById(decodedData.id);

   next();
});

export const authenticateUser = asyncHandler(async (req, res, next) => {
   const token = req.cookies?.blog_access;
   
   if (!token) {
      return next(messageHandler('User must be signed in!', 401));
   }

   const decodedData = await jwt.verify(token, process.env.JWT_SECRET);

   req.user = await User?.findById(decodedData.id);

   next();

});

export const authorizeRoles = (...roles) => {
   
   return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
         return next(messageHandler(
               `Role: ${req.user.role} is not allowed to access this resource`, 403));
      }
      next();
   }
}