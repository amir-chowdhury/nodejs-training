import express from 'express';
import logger from 'loglevel';
import { getRoutes } from './api/v1/routes';

function startServer() {
  const app = express();
  app.set('port', process.env.PORT || 3000);
  app.use(express.json());
  app.use('/api/v1', getRoutes());
  
  app.listen(app.get('port'), () => {
    logger.info(`⚡️[server]: Server is running at http://localhost:${app.get('port')}`);
  });
}

export { startServer };
