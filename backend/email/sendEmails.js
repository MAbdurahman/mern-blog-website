import sendEmails from '../configs/nodemailerConfig.js';
import {passwordResetRequestTemplate} from './emailTemplates.js';
import {passwordResetSuccessTemplate} from './emailTemplates.js';
import {verificationEmailTemplate} from './emailTemplates.js';
import {welcomeEmailTemplate} from './emailTemplates.js';
import ErrorHandler from '../utils/errorHandlerUtil.js';
import {getFirstName} from '../utils/functionsUtil.js';
import {response} from 'express';


export async function sendPasswordResetRequestTemplate(user, resetURL, next ) {
   const firstName = getFirstName(user?.fullname);
   const message = passwordResetRequestTemplate.replace('{name}', firstName).replace('{resetURL}', resetURL);

   try {
      await sendEmails({
         email: user?.email,
         subject: 'Password Reset Request',
         message: message,
      })
      response.status(200).json({
         message: `Email sent to ${user?.email}`,
         success: true
      })

   } catch(err) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpiresAt = undefined;
      await user.save({ validateBeforeSave: false });

      return next(new ErrorHandler(err?.message, 500));

   }
}

export async function sendPasswordResetSuccessTemplate(email, name, next) {
   const firstName = getFirstName(name);
   const message = passwordResetSuccessTemplate.replace('{name}', firstName);
}

export async function sendVerificationEmailTemplate(email, name, next) {
   const firstName = getFirstName(name);
   const message = verificationEmailTemplate.replace('{name}', firstName).replace('{email}', email);
}

export async function sendWelcomeEmailTemplate(email, name, next) {
   const firstName = getFirstName(name);
   const message = welcomeEmailTemplate.replace('{name}', firstName).replace('{email}', email);
}