import sendEmails from '../configs/nodemailerConfig.js';
import {passwordResetRequestTemplate} from './emailTemplates.js';
import {passwordResetSuccessTemplate} from './emailTemplates.js';
import {verificationEmailTemplate} from './emailTemplates.js';
import {welcomeEmailTemplate} from './emailTemplates.js';
import ErrorHandler from '../utils/errorHandlerUtil.js';
import {getFirstName} from '../utils/functionsUtil.js';


export async function sendPasswordResetRequestTemplate(user, resetURL, res, next) {
   const firstName = getFirstName(user?.fullname);
   const message = passwordResetRequestTemplate.replace('{name}', firstName).replace('{resetURL}', resetURL);

   try {
      await sendEmails({
         email: user?.email,
         subject: 'Password Reset Request',
         message: message
      })
      res.status(200).json({
         message: `Email sent to ${user?.email}`,
         success: true
      })

   } catch (err) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpiresAt = undefined;
      await user.save({validateBeforeSave: false});

      return next(new ErrorHandler(err?.message, 500));

   }
}

export async function sendPasswordResetSuccessTemplate(user, res, next) {
   const firstName = getFirstName(user.fullname);
   const message = passwordResetSuccessTemplate.replace('{name}', firstName);

   try {
      await sendEmails({
         email: user?.email,
         subject: 'Password Reset Success',
         message: message
      })
      res.status(200).json({
         message: `Email sent to ${user?.email}`,
         success: true
      })

   } catch (err) {
      return next(new ErrorHandler(err?.message, 500));
   }
}

export async function sendVerificationEmailTemplate(user, verificationToken, res, next) {
   const firstName = getFirstName(user.fullname);
   const message = verificationEmailTemplate.replace('{name}', firstName).replace('{verificationCode}', verificationToken);

   try {
      await sendEmails({
         email: user?.email,
         subject: 'Verification Email',
         message: message
      })

      res.status(200).json({
         message: `Email sent to ${user?.email}`,
         success: true
      })


   } catch (err) {
      user.verificationToken = undefined;
      user.verificationTokenExpiresAt = undefined;
      await user.save({validateBeforeSave: false});

      return next(new ErrorHandler(err?.message, 500));

   }
}

export async function sendWelcomeEmailTemplate(user, res, next) {
   const firstName = getFirstName(name);
   const message = welcomeEmailTemplate.replace('{name}', firstName);

   try {
      await sendEmails({
         email: user?.email,
         subject: 'Welcome Email',
         message: message

      })

      res.status(200).json({
         message: `Email sent to ${user?.email}`,
         success: true
      })

   } catch (err) {
      return next(new ErrorHandler(err?.message, 500));

   }
}