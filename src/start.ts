import express from 'express'
import { env } from 'process'
import logger from 'loglevel'
import { getRoutes } from './api/v1/routes'
import { errorMiddleware } from './api/v1/middlewares/error'
import { Server } from 'http'

async function startServer (
  { port = env.PORT ?? 3000 } = {}
): Promise<Server> {
  const app = express()
  app.set('port', port)
  app.use(express.json())
  app.use('/api/v1', getRoutes())
  app.use(errorMiddleware)

  return await new Promise((resolve) => {
    const server = app.listen(port, () => {
      logger.info(`⚡️[server]: Server is running at http://localhost:${port}`)
      resolve(server)
    })
  })
}

export { startServer }
