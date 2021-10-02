import express from 'express';
import { getRoutes } from './api/v1/routes';

function startServer() {
  const app = express();
  const PORT = 8000;
  
  app.use(express.json());

  app.use('/api/v1', getRoutes());
  
  app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
  });
}

export { startServer };
