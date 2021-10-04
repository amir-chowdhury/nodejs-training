import express, { Router } from 'express'
import { getUserRoutes } from './users'

function getRoutes (): Router {
  const router = express.Router()
  router.use('/users', getUserRoutes())
  return router
}

export { getRoutes }
