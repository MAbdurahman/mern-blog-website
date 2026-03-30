import {mailtrapClient, sender} from '../configs/mailtrapConfig.js';
import messageHandler from '../utils/messageHandlerUtil.js';
import {getFirstName} from '../utils/functionsUtil.js';
import {
   passwordResetRequestTemplate,
   passwordResetSuccessTemplate,
   verificationEmailTemplate, welcomeEmailTemplate
} from './emailTemplates.js';
import {response} from 'express';

export async function sendVerificationEmail(email, name, verificationToken, next) {
   const recipient = [{email}];
   const firstName = getFirstName(name);
   try {
      await mailtrapClient.send({
         from: sender,
         to: recipient,
         subject: "Verify Email",
         html: verificationEmailTemplate.replace("{verificationCode}", verificationToken).replace('{name}', firstName),
         category: "Verification Email",
      });
   }
   catch (err) {
      messageHandler(response, 'Error sending verification email', 400);
      next(err);

   }
}//end of sendVerificationEmail Function

export async function sendWelcomeEmail(email, name, next) {
   const recipient = [{email}];
   const firstName = getFirstName(name);
   try {
      await mailtrapClient.send({
         from: sender,
         to: recipient,
         subject: "Welcome Email",
         html: welcomeEmailTemplate.replace('{name}', firstName),
         category: "Welcome Email",

      });
   }
   catch (err) {
      next(err);
   }
}//end of sendWelcomeEmail Function

export async function sendPasswordResetEmail(email, name, resetURL, next ) {
   const recipient = [{ email }];
   const firstName = getFirstName(name);
   try {
      await mailtrapClient.send({
         from: sender,
         to: recipient,
         subject: "Password Reset Request",
         html: passwordResetRequestTemplate.replace('{name}', firstName).replace('{resetURL}', resetURL),
         category: "Password Reset Request",
      });
   }
   catch (err) {
      next(err);
   }
}//end of sendPasswordResetEmail Function

export async function sendResetSuccessEmail(email, name, next) {
   const recipient = [{ email }];
   const firstName = getFirstName(name);

   try {
      await mailtrapClient.send({
         from: sender,
         to: recipient,
         subject: "Password Reset Success",
         html:passwordResetSuccessTemplate.replace('{name}', firstName),
         category: "Password Reset Success",
      });
   }
   catch (err) {
      next(err);
   }
}//end sendResetSuccessEmail Function