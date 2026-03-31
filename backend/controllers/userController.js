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
import {
   sendVerificationEmail, sendWelcomeEmail, sendPasswordResetEmail,
   sendResetSuccessEmail
} from '../email/sendEmails.js';

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

   /************************* create and save a user *************************/
   const verificationToken = await User.generateVerificationToken();

   const newUser = await User.create({
      fullname,
      email,
      password,
      verificationToken
   });

   await sendVerificationEmail(email, verificationToken);
   const {password: pass, ...rest} = newUser._doc;

   res.status(201).json({
      message: `${getFirstName(fullname)} signed up successfully!`,
      success: true,
      user: rest
   });

});
export const signInUser = asyncHandler(async (req, res, next) => {

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
export const verifyUserEmail = asyncHandler(async (req, res, next) => {
   const {code} = req.body;

   const user = await User.findOne({
      verificationToken: code,
      verificationTokenExpiresAt: {$gt: Date.now()}
   });
   if (!user) {
      next(messageHandler(res, false, 'Invalid or expired verification code', 400));
   }

   user.isVerified = true;
   user.verificationToken = undefined;
   user.verificationTokenExpiresAt = undefined;

   await user.save();

   await sendWelcomeEmail(user.email, user.fullname);

   const {password: pass, ...rest} = user._doc;

   res.status(200).json({
      message: `${getFirstName(user.fullname)} has verified their email!`,
      success: true,
      user: rest
   });
});