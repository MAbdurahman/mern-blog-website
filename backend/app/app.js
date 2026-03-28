import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';
import helmet from 'helmet';
import logger from './../middlewares/loggerMiddleware.js';
import expressMongoSanitize from '@exortek/express-mongo-sanitize';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import errorsMiddleware from './../middlewares/errorsMiddleware.js';

/************************* setup config file *************************/
if (process.env.NODE_ENV !== 'production') {
   dotenv.config({path: './configs/config.env', quiet: true});
}

/***************************** variables *****************************/
const app = express();
colors.enabled = true;
const allowedDomains = [process.env.FRONTEND_URL, 'http://localhost:5173'];
/**************************** middlewares ****************************/
if (process.env.NODE_ENV === 'development') {
   app.use(morgan('dev'));
}
app.use(helmet());
app.use(
   cors({
      origin: function (origin, callback) {
         // bypass the requests with no origin (like curl requests, mobile apps, etc )
         if (!origin) {
            return callback(null, true);
         }

         if (allowedDomains.indexOf(origin) === -1) {
            let message = `This site ${origin} does not have access. Only specific domains are allowed to access!`.red;
            return callback(new Error(message), false);
         }
         return callback(null, true);
      },
      methods: ['GET', 'POST', 'DELETE', 'PATCH', 'PUT'],
      allowedHeaders: [
         'Content-Type',
         'Authorization',
         'Cache-Control',
         'Expires',
         'Pragma',
      ],
      credentials: true,
   })
);
app.set('query parser', 'extended');
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(expressMongoSanitize());
app.use(logger);

/*************************** import all routes ***************************/
import homeRoute from '../routes/homePageRoute.js';
import authRoutes from '../routes/authRoutes.js';
import postRoutes from '../routes/postRoutes.js';
import commentRoutes from '../routes/commentRoutes.js';
import notificationRoutes from '../routes/notificationRoutes.js';

/******************************** routes ********************************/
app.use('/', homeRoute);
app.use('/api/v1.0', authRoutes);
app.use('/api/v1.0', postRoutes);
app.use('/api/v1.0', commentRoutes);
app.use('/api/v1.0', notificationRoutes);

/************************** errors middleware **************************/
app.use(errorsMiddleware);

export default app;