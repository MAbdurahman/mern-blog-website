import ErrorHandler from '../utils/errorHandlerUtil.js';

const errorsMiddleware = (err, req, res, next) => {
   const statusCode = err.statusCode || 500;

   if (process.env.NODE_ENV === 'development') {
      return res.status(statusCode).json({
         success: false,
         error: err,
         errMessage: err.message,
         stack: err.stack,
      });
   }

   /***************** production *****************/
   let error = err;
   error.statusCode = statusCode;
   error.message = err.message;

   /***************** handling mongoose object ID error *****************/
   if (err.name === 'CastError') {
      const message = `Resource not found! Invalid: ${err.path}`;
      error = new ErrorHandler(message, 400);
   }
   /***************** handling mongoose validation error *****************/
   else if (err.name === 'ValidationError') {
      const message = Object.values(err.errors)
         .map(v => v.message)
         .join(', ');
      error = new ErrorHandler(message, 400);
   }
   /***************** handling mongoose duplicate errors *****************/
   else if (err.code === 11000) {
      const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
      error = new ErrorHandler(message, 400);
   }
   /***************** handling invalid JWT error*****************/
   else if (err.name === 'JsonWebTokenError') {
      const message = 'JSON Web Token is invalid. Try Again!!!';
      error = new ErrorHandler(message, 400);
   }
   /***************** handling expired JWT error *****************/
   else if (err.name === 'TokenExpiredError') {
      const message = 'JSON Web Token is expired. Try Again!!!';
      error = new ErrorHandler(message, 400);
   }

   return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || 'Internal Server Error!',
   });
};

export default errorsMiddleware;