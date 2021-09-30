import { Router } from 'express';
import { UserController } from '../controllers/users';
import { validateSchema } from '../validation/utils';
import { UserValidation } from '../validation/users';

const router = Router();

router
  .route('/')
  .get(UserController.getUsers)
  .post(validateSchema(UserValidation.create), UserController.createUser);

router.get('/suggest', UserController.getAutoSuggestUsers);

router
  .route('/:id')
  .get(UserController.getUser)
  .put(validateSchema(UserValidation.update), UserController.updateUser)
  .delete(UserController.deleteUser);

export default router;
