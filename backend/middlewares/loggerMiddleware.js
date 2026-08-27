/*import colors from 'colors';*/
/*colors.enabled = true;*/

/*
const logger = function(req, res, next) {
   const currentDate = new Date();
   const formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()} @ ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`.bold.italic.yellow;

   console.log(`method: ${req.method}  url: ${req.url}  timestamp: ${formattedDate}`.bold.italic.yellow);
   next();
}

export default logger;*/


import colors from 'colors';
colors.enabled = process.env.NODE_ENV !== 'production';

const logger = (req, res, next) => {
   const start = process.hrtime.bigint(); // high-res timer
   const now = new Date();

   const ts = now.toISOString(); // stable, sortable format

   res.on('finish', () => {
      const ms = Number(process.hrtime.bigint() - start) / 1e6;
      const line = `method=${req.method} status=${req.statusCode} duration=${ms.toFixed(1)} ts=${ts} url=${req.originalUrl}`;
      console.log(colors.enabled ? line.yellow.bold : line);
   });

   res.on('close', () => {

   });

   next();

}

export default logger;