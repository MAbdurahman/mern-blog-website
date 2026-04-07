/************************** imports **************************/
import bcrypt from 'bcryptjs';
import User from '../models/userModel.js';
import asyncHandler from '../utils/asyncHandlerUtil.js';
import messageHandler from '../utils/messageHandlerUtil.js';
import setCookieAndToken from '../utils/setCookieAndTokenUtil.js';
import {
   getFirstName,
   validateEmail,
   validatePassword,
   validateFullname
} from '../utils/functionsUtil.js';


export const signUpUser = asyncHandler(async (req, res, next) => {
   const {fullname, email, password} = req.body;

   if (!fullname) {
      return next(messageHandler(res, false, 'Fullname is required', 400));
   }
   if (validateFullname(fullname).isValid === false) {
      const {error} = validateFullname(fullname);
      return next(messageHandler(res, false, error, 406));
   }

   if (!email) {
      return next(messageHandler(res, false, 'Email is required', 400));
   }
   if (validateEmail(email).isValid === false) {
      const {error} = validateEmail(email);
      return next(messageHandler(res, false, error, 406));
   }

   if (!password) {
      return next(messageHandler(res, false, 'Password is required', 400));
   }
   if (validatePassword(password).isValid === false) {
      const {error} = validatePassword(password);
      return next(messageHandler(res, false, error, 406));
   }

   /******************** find out if an user already exists ********************/
   const userAlreadyExists = await User?.findOne({email});

   if (userAlreadyExists) {
      return next(messageHandler(res, false, 'User already exists!', 409));
   }

   /************************* create user and save user ************************/

   const newUser = await new User({
      fullname,
      email,
      password
   });

   await newUser.save();

   const {password: pass, ...rest} = newUser._doc;

   res.status(201).json({
      message: `${getFirstName(fullname)} signed up successfully!`,
      success: true,
      user: rest
   });

});
export const signInUser = asyncHandler(async (req, res, next) => {
   const { email, password } = req.body;

   if (!email) {
      return next(messageHandler(res, false, 'Email is required', 400));
   }
   if (validateEmail(email).isValid === false) {
      const { error } = validateEmail(email);
      return next(messageHandler(res, false, error, 406));
   }

   if (!password) {
      return next(messageHandler(res, false, 'Password is required', 400));
   }
   if (validatePassword(password).isValid === false) {
      const { error } = validatePassword(password);
      return next(messageHandler(res, false, error, 406));
   }

   const isValidUser = await User?.findOne({ email }).select('+password');
   if (!isValidUser) {
      return next(messageHandler(res, false, 'User not found!', 404));
   }

   const hasValidPassword = await isValidUser.comparePassword(password);
   if (!hasValidPassword) {
      return next(messageHandler(res, false, 'Invalid credentials!', 401));
   }

   if (!isValidUser.isLoggedIn) {
      await isValidUser.toggleIsLoggedIn();
      await isValidUser.updateLastLoginTime();
   }

   setCookieAndToken(isValidUser, res, 200);

});
export const signOutUser = asyncHandler(async (req, res, next) => {
});
export const getCurrentUserProfile = asyncHandler(async (req, res, next) => {
});
export const updateCurrentUserPassword = asyncHandler(async (req, res, next) => {
});
export const updateCurrentUserProfile = asyncHandler(async (req, res, next) => {
});
export const userForgotPassword = asyncHandler(async (req, res, next) => {
});
export const userResetPassword = asyncHandler(async (req, res, next) => {
});
export const getAllUsersAdmin = asyncHandler(async (req, res, next) => {
});
export const getSingleUserAdmin = asyncHandler(async (req, res, next) => {
});
export const updateUserProfileAdmin = asyncHandler(async (req, res, next) => {
});
export const deleteUserAdmin = asyncHandler(async (req, res, next) => {
});