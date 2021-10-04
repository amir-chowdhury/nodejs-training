import { Router } from 'express'
import { UserController } from '../controllers'
import { validateSchema } from '../middlewares/validate-schema'
import { UserValidation } from '../validations'

function getUserRoutes () {
  const router = Router()

  router
    .route('/')
    .get(UserController.getUsers)
    .post(validateSchema(UserValidation.create), UserController.createUser)

  router.get('/suggest', UserController.getAutoSuggestUsers)

  router
    .route('/:id')
    .get(UserController.getUser)
    .put(validateSchema(UserValidation.update), UserController.updateUser)
    .delete(UserController.deleteUser)

  return router
}

export { getUserRoutes }
