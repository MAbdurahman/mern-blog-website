
export const verificationEmailTemplate = `
<!DOCTYPE html>
<html lang='en-US'>

<head>
    <meta content='text/html; charset=UTF-8' http-equiv='Content-Type'/>
    <meta content='width=device-width, initial-scale=1.0' name='viewport'>
    <meta name='x-apple-disable-message-reformatting'/>
    <title>Verify Email</title>
    <link href='https://fonts.googleapis.com' rel='preconnect'>
    <link crossorigin href='https://fonts.gstatic.com' rel='preconnect'>
    <link
            href='https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans+Mono:wght@100..900&display=swap'
            rel='stylesheet'>
    <link href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css'
          rel='stylesheet'>
</head>
<style media='all' rel='stylesheet'>
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -o-user-select: none;
        user-select: none;
    }
    
    *::-moz-focus-inner {
        border: 0;
    }
    
    *:focus {
        outline: none;
    }
    
    body {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        line-height: 1.6;
        color: #222;
    }
    
    section.container {
        max-width: 640px;
        min-width: 310px;
        margin: 0 auto;
        padding: 16px;
    }
    
    .header {
        padding: 16px;
        text-align: center;
        background: linear-gradient(to right, #1f628e, #1a5175);
    }
    
    .main_content {
        padding: 16px;
        background-color: #f9f9f9;
        border-radius: 0 0 5px 5px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    
    .header h1 {
        margin: 0;
        font-family: 'Lora', serif;
        color: white;
    }
    
    .paragraph_one {
        margin-bottom: 12px;
    }
    
    .paragraph_two {
        margin-bottom: 8px;
    }
    
    .verification_code_container {
        margin: 16px auto;
        text-align: center;
    }
    
    .verification_code {
        font-family: 'Noto Sans Mono', monospace;
        font-size: 24px;
        font-weight: 800;
        letter-spacing: 5px;
        color: #154260;;
    }
    .footer {
        margin-top: 2px;
        margin-bottom: 2px;
        padding: 16px;
        font-size: 0.8em;
        text-align: center;
        color: #888;
    }

</style>
<body>
<section class='container'>
    <div class='header'>
        <h1>Verify Email</h1>
    </div>
    <div class='main_content'>
        <p class='paragraph_one'>Hello&nbsp;{name},</p>
        <p class='paragraph_two'>Thank you for signing up! Your verification code
            is:</p>
        <div class='verification_code_container'>
            <span class='verification_code'>{verificationCode}</span>
        </div>
        <p class='paragraph_two'>Enter this code on the verification page to complete
            your
            registration.</p>
        <p class='paragraph_two'>This code will expire in 15 minutes for security
            considerations.</p>
        <p class='paragraph_two'>If you did not create an account with us, please
            ignore this email.</p>
        <p class='paragraph_two'>Best regards,<br>MERN Blog Team</p>
    </div>
    <div class='footer'>
        <p>This is an automated email, please do not reply.</p>
    </div>
</section>
</body>
</html>
`;

export const welcomeEmailTemplate = `
<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta content='text/html; charset=UTF-8' http-equiv='Content-Type'/>
    <meta content='width=device-width, initial-scale=1.0' name='viewport'>
    <meta name='x-apple-disable-message-reformatting'/>
    <title>Welcome Email</title>
    <link href='https://fonts.googleapis.com' rel='preconnect'>
    <link crossorigin href='https://fonts.gstatic.com' rel='preconnect'>
    <link
            href='https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans+Mono:wght@100..900&display=swap'
            rel='stylesheet'>
    <link href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css'
          rel='stylesheet'>
</head>
<style media='all' rel='stylesheet'>
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -o-user-select: none;
        user-select: none;
    }
    
    *::-moz-focus-inner {
        border: 0;
    }
    
    *:focus {
        outline: none;
    }
    
    body {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        line-height: 1.6;
        color: #222;
    }
    
    section.container {
        max-width: 640px;
        min-width: 310px;
        margin: 0 auto;
        padding: 16px;
    }
    
    .header {
        padding: 16px;
        text-align: center;
        background: linear-gradient(to right, #1f628e, #1a5175);
    }
    
    .main_content {
        padding: 16px;
        background-color: #f9f9f9;
        border-radius: 0 0 5px 5px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    
    .header h1 {
        margin: 0;
        font-family: 'Lora', serif;
        color: white;
    }
    
    .paragraph_one {
        margin-bottom: 12px;
    }
    
    .paragraph_two {
        margin-bottom: 8px;
    }
    
    .footer {
        margin-top: 2px;
        margin-bottom: 2px;
        padding: 16px;
        font-size: 0.8em;
        text-align: center;
        color: #888;
    }
    
    </style>
<body>
<section class='container'>
    <div class='header'>
        <h1>Welcome Email</h1>
    </div>
    <div class='main_content'>
        <p class='paragraph_one'>Hello&nbsp;{name},</p>
        <p class='paragraph_two'>Thanks for signing up with MERN Blog. As a new member, you will enjoy special offers and exclusive deals, exciting new post announcements, and our unique take on developing trends.</p>
        <p class='paragraph_two'>We take as much pride and care in what we offer as you do in your researching. That means you can trust and
            rely on us (and our content) to help you reach new heights in your endeavors.</p>
        <p class='paragraph_two'>Best regards,<br>MERN Blog Team</p>
    </div>
    <div class='footer'>
        <p>This is an automated email, please do not reply.</p>
    </div>
</section>
</body>
</html>
`;


export const passwordResetRequestTemplate = `
<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta content='text/html; charset=UTF-8' http-equiv='Content-Type'/>
    <meta content='width=device-width, initial-scale=1.0' name='viewport'>
    <meta name='x-apple-disable-message-reformatting'/>
    <title>Password Reset Request</title>
    <link href='https://fonts.googleapis.com' rel='preconnect'>
    <link crossorigin href='https://fonts.gstatic.com' rel='preconnect'>
    <link
            href='https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans+Mono:wght@100..900&display=swap'
            rel='stylesheet'>
    <link href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css'
          rel='stylesheet'>
</head>
<style media='all' rel='stylesheet'>
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -o-user-select: none;
        user-select: none;
    }
    
    *::-moz-focus-inner {
        border: 0;
    }
    
    *:focus {
        outline: none;
    }
    
    html {
        font-size: 100%;
    }
    
    @media only screen and (max-width: 767px) {
        html {
            font-size: 83%;
        }
    }
    
    @media only screen and (max-width: 378px) {
        html {
            font-size: 75%;
        }
    }
    
    body {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        line-height: 1.6;
        color: #222;
    }
    h1 {
        font-size: 2rem;
    }
    section.container {
        max-width: 640px;
        min-width: 310px;
        margin: 0 auto;
        padding: 16px;
    }
    
    .header {
        padding: 16px;
        text-align: center;
        background: linear-gradient(to right, #1f628e, #1a5175);
    }
    
    .main_content {
        padding: 16px;
        background-color: #f9f9f9;
        border-radius: 0 0 5px 5px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    
    .header h1 {
        margin: 0;
        font-family: 'Lora', serif;
        color: white;
    }
    
    .paragraph_one {
        margin-bottom: 12px;
    }
    
    .paragraph_two {
        margin-bottom: 8px;
    }
    
    .button_container {
        margin: 30px auto;
        text-align: center;
    }
    .button_container a {
        padding: 16px 32px;
        text-transform: uppercase;
        letter-spacing: 1px;
        text-decoration: none;
        color: white;
        font-weight: 800;
        background-color: #1f628e;
        border-radius: 5px;
        transition: background-color 0.55ms ease-in-out;
        cursor: pointer;
    }
    .button_container a:hover {
        background-color: #276e9d;
    }
    
    .footer {
        margin-top: 2px;
        margin-bottom: 2px;
        padding: 16px;
        font-size: 0.8em;
        text-align: center;
        color: #888;
    }
    </style>
<body >
<section class='container'>
    <div class='header'>
        <h1>Password Reset Request</h1>
    </div>
    <div class='main_content'>
        <p class='paragraph_one'>Hello&nbsp;{name}</p>
        <p class='paragraph_two'>We received a request to reset your password. If you did not make this request, please ignore this email.</p>
        <p class='paragraph_two'>To reset your password, click the button below:</p>
        <div class='button_container'>
            <a href="{resetURL}">Reset Password</a>
        </div>
        <p class='paragraph_two'>This link will expire in 30 minutes for security considerations.</p>
        <p class='paragraph_two'>Best regards,<br>MERN Blog Team</p>
    </div>
    <div class='footer'>
        <p>This is an automated email, please do not reply.</p>
    </div>
</section>

</body>
</html>
`;

export const passwordResetSuccessTemplate = `
<!DOCTYPE html>
<html lang='en-US'>
<head>
    <meta content='text/html; charset=UTF-8' http-equiv='Content-Type'/>
    <meta content='width=device-width, initial-scale=1.0' name='viewport'>
    <meta name='x-apple-disable-message-reformatting'/>
    <title>Password Reset Success</title>
    <link href='https://fonts.googleapis.com' rel='preconnect'>
    <link crossorigin href='https://fonts.gstatic.com' rel='preconnect'>
    <link href='https://fonts.googleapis.com' rel='preconnect'>
    <link crossorigin href='https://fonts.gstatic.com' rel='preconnect'>
    <link
            href='https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans+Mono:wght@100..900&display=swap'
            rel='stylesheet'>
    <link href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css'
          rel='stylesheet'>
</head>
<style media='all' rel='stylesheet'>
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -o-user-select: none;
        user-select: none;
    }
    
    *::-moz-focus-inner {
        border: 0;
    }
    
    *:focus {
        outline: none;
    }
    
    html {
        font-size: 100%;
    }
    
    @media only screen and (max-width: 767px) {
        html {
            font-size: 83%;
        }
    }
    
    @media only screen and (max-width: 378px) {
        html {
            font-size: 75%;
        }
    }
    
    @media only screen and (max-width: 378px) {
        html {
            font-size: 62.5%;
        }
    }
    
    body {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        line-height: 1.6;
        color: #222;
    }
    
    h1 {
        font-size: 2rem;
    }
    
    section.container {
        max-width: 640px;
        min-width: 310px;
        margin: 0 auto;
        padding: 16px;
    }
    
    .header {
        background: linear-gradient(to right, #1f628e, #1a5175);
        padding: 16px;
        text-align: center;
    }
    
    .main_content {
        padding: 16px;
        background-color: #f9f9f9;
        border-radius: 0 0 5px 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    
    .header h1 {
        margin: 0;
        font-family: 'Lora', serif;
        color: white;
    }
    
    .paragraph_one {
        margin-bottom: 12px;
    }
    
    .paragraph_two {
        margin-bottom: 8px;
    }
    
    .paragraph_three {
        margin: 0;
    }
    
    .success_img_container {
        margin: 16px auto;
        text-align: center;
    }
    .success_img {
        width: 48px;
        height: 48px;
        display: inline-block;
        font-size: 32px;
        line-height: 48px;
        color: white;
        background-color: #308605;
        border-radius: 50%;
    }
    
    .password_suggestion--list {
        padding: 8px 24px;
        list-style-type: square;
    }
    
    .password_suggestion--list-item {
        font-weight: 600;
        color: #1f628e;
    }
    
    .footer {
        margin-top: 2px;
        margin-bottom: 2px;
        padding: 16px;
        font-size: 0.8em;
        text-align: center;
        color: #888;
    }

</style>
<body>
<section class='container'>
    <div class='header'>
        <h1>Password Reset Success</h1>
    </div>
    <div class='main_content'>
        <p class='paragraph_one'>Hello&nbsp;{name},</p>
        <p class='paragraph_two'>We are writing to confirm that your password has
            been reset successfully.</p>
        <div class='success_img_container'>
            <div class='success_img'>
                ✓
            </div>
        </div>
        <p class='paragraph_two'>If you did not initiate the reset of your password,
            please contact our support team immediately.</p>
        <p class='paragraph_three'>For security reasons, we recommend that you:</p>
        <ul class='password_suggestion--list'>
            <li class='password_suggestion--list-item'>Ensure each password is unique to each account
            </li>
            <li class='password_suggestion--list-item'>Include a mix of letters, numbers, and special characters
            </li>
            <li class='password_suggestion--list-item'>Enable multifactor authentication (MFA), whenever possible
            </li>
        </ul>
        <p class='paragraph_two'>Thank you for helping us keep your account
            secure.</p>
        <p class='paragraph_two'>Best regards,<br>MERN Blog Team</p>
    </div>
    <div class='footer'>
        <p>This is an automated email, please do not reply.</p>
    </div>
</section>
</body>
</html>
`;