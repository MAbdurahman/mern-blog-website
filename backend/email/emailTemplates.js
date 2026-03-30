
export const verificationEmailTemplate = `
<!DOCTYPE html>
<html lang="en">

   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Verify Email</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link
         href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans+Mono:wght@100..900&display=swap"
         rel="stylesheet">
   </head>
   <body
      style="font-family: 'Montserrat', sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(to right, #1f628e, #1a5175); padding: 20px; text-align: center;">
         <h1 style="font-family: 'Lora', serif; color: white; margin: 0;">Verify Email</h1>
      </div>
      <div
         style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
         <p>Hello&nbsp;{name},</p>
         <p>Thank you for signing up! Your verification code is:</p>
         <div style="text-align: center; margin: 30px 0;">
            <span
               style="font-family: 'Noto Sans Mono', monospace;font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #154260;">{verificationCode}</span>
         </div>
         <p>Enter this code on the verification page to complete your registration.</p>
         <p>This code will expire in 15 minutes for security considerations.</p>
         <p>If you did not create an account with us, please ignore this email.</p>
         <p>Best regards,<br>MERN Auth Advance Team</p>
      </div>
      <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
         <p>This is an automated email, please do not reply.</p>
      </div>
   </body>
</html>
`;

export const passwordResetSuccessTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset Success</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans+Mono:wght@100..900&display=swap"
            rel="stylesheet">
</head>
<body style="font-family: 'Montserrat', sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
<div style="background: linear-gradient(to right, #1f628e, #1a5175); padding: 20px; text-align: center;">
    <h1 style="font-family: 'Lora', serif; color: white; margin: 0;">Password Reset Success</h1>
</div>
<div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello&nbsp;{name},</p>
    <p>This correspondence is to confirm that your password has been reset successfully.</p>
    <div style="text-align: center; margin: 30px 0;">
        <div style="background-color: #39a503; color: white; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; display: inline-block; font-size: 32px;">
            ✓
        </div>
    </div>
    <p>If you did not initiate the reset of your password, please contact our support team immediately.</p>
    <p>For security reasons, we recommend that you:</p>
    <ul>
        <li>Use a strong, unique password</li>
        <li>Enable two-factor authentication if available</li>
        <li>Avoid using the same password across multiple sites</li>
    </ul>
    <p>Thank you for helping us keep your account secure.</p>
    <p>Best regards,<br>MERN Auth Advance Team</p>
</div>
<div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated email, please do not reply.</p>
</div>
</body>
</html>
`;

export const passwordResetRequestTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset Request</title>
</head>
<body style="font-family: 'Montserrat', sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
<div style="background: linear-gradient(to right, #1f628e, #1a5175); padding: 20px; text-align: center;">
    <h1 style="font-family: 'Lora', serif; color: white; margin: 0;">Password Reset Request</h1>
</div>
<div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello&nbsp;{name}</p>
    <p>We received a request to reset your password. If you did not make this request, please ignore this email.</p>
    <p>To reset your password, click the button below:</p>
    <div style="text-align: center; margin: 30px 0;">
        <a href="{resetURL}" style="background-color: #154260; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Reset Password</a>
    </div>
    <p>This link will expire in 1 hour for security considerations.</p>
    <p>Best regards,<br>MERN Auth Advance Team</p>
</div>
<div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated email, please do not reply.</p>
</div>
</body>
</html>
`;

export const welcomeEmailTemplate = `
<!DOCTYPE html>
<html lang="en">

   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome Email</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link
         href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans+Mono:wght@100..900&display=swap"
         rel="stylesheet">
   </head>

   <body
      style="font-family: 'Montserrat', sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(to right, #1f628e, #1a5175); padding: 20px; text-align: center;">
         <h1 style="font-family: 'Lora', serif; color: white; margin: 0;">Welcome Email</h1>
      </div>
      <div
         style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
         <p>Hello&nbsp;{name},</p>
         <p>Thanks for signing up with MERN Auth Advance. As a new member, you will enjoy special offers and exclusive
            deals, exciting new
            product announcements, and our unique take on developing trends.</p>
         <p>We take as much pride and care in what we offer as you do in your researching. That means you can trust and
            rely on us (and our
            products) to help you reach new heights in your endeavors.</p>
         <p>Best regards,<br>MERN Auth Advance Team</p>
      </div>
      <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
         <p>This is an automated email, please do not reply.</p>
      </div>
   </body>

</html>
`