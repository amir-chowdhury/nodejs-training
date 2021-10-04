import express from 'express'
import { env } from 'process'
import logger from 'loglevel'
import { getRoutes } from './api/v1/routes'

function startServer (): void {
  const app = express()
  const PORT = env.PORT ?? 3000
  app.set('port', PORT)
  app.use(express.json())
  app.use('/api/v1', getRoutes())

  app.listen(PORT, () => {
    logger.info(`⚡️[server]: Server is running at http://localhost:${PORT}`)
  })
}

export { startServer }
