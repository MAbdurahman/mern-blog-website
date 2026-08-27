import ErrorHandler from './errorHandlerUtil.js';

const messageHandler = (message, statusCode = 400) => {
   return new ErrorHandler(message, statusCode);

}

export default messageHandler;