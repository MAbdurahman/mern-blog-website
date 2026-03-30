/************************* imports *************************/
import {MailtrapClient} from 'mailtrap';
import dotenv from 'dotenv';

dotenv.config({path: '../configs/config.env'});

export const mailtrapClient = new MailtrapClient({
   token: process.env.MAILTRAP_API_KEY
});

export const sender = {
   email: 'hello@demomailtrap.com',
   name: 'MERN Blog'
};