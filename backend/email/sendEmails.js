import {mailtrapClient, sender} from '../configs/mailtrapConfig.js';
import messageHandler from '../utils/messageHandlerUtil.js';
import {getFirstName} from '../utils/functionsUtil.js';
import {
   passwordResetRequestTemplate,
   passwordResetSuccessTemplate,
   verificationEmailTemplate, welcomeEmailTemplate
} from './emailTemplates.js';
import {response} from 'express';

export async function sendVerificationEmail(email, fullname, verificationToken) {
   const recipient = [{email}];
   const firstName = getFirstName(fullname);
   try {
      await mailtrapClient.send({
         from: sender,
         to: recipient,
         subject: "Verify Email",
         html: verificationEmailTemplate.replace("{verificationCode}", verificationToken).replace('{fullname}', firstName),
         category: "Verification Email",
      });
   }
   catch (err) {
      return messageHandler(response, 'Error sending verification email', 400);

   }
}//end of sendVerificationEmail Function

export async function sendWelcomeEmail(email, fullname) {
   const recipient = [{email}];
   const firstName = getFirstName(fullname);
   try {
      await mailtrapClient.send({
         from: sender,
         to: recipient,
         subject: "Welcome Email",
         html: welcomeEmailTemplate.replace('{fullname}', firstName),
         category: "Welcome Email",

      });
   }
   catch (err) {
      return messageHandler(response, 'Error welcome email', 400);
   }
}//end of sendWelcomeEmail Function

export async function sendPasswordResetEmail(email, fullname, resetURL) {
   const recipient = [{ email }];
   const firstName = getFirstName(fullname);
   try {
      await mailtrapClient.send({
         from: sender,
         to: recipient,
         subject: "Password Reset Request",
         html: passwordResetRequestTemplate.replace('{fullname}', firstName).replace('{resetURL}', resetURL),
         category: "Password Reset Request",
      });
   }
   catch (err) {
      return messageHandler(response, 'Error send password reset email', 400);
   }
}//end of sendPasswordResetEmail Function

export async function sendResetSuccessEmail(email, fullname) {
   const recipient = [{ email }];
   const firstName = getFirstName(fullname);

   try {
      await mailtrapClient.send({
         from: sender,
         to: recipient,
         subject: "Password Reset Success",
         html:passwordResetSuccessTemplate.replace('{fullname}', firstName),
         category: "Password Reset Success",
      });
   }
   catch (err) {
      return messageHandler(response, err.message, 500)
   }
}//end sendResetSuccessEmail Function