import { Router } from 'express';
import { UserController } from '../controllers/users';

const router = Router();

router
  .route('/')
  .get(UserController.getUsers)
  .post(UserController.createUser);

router.get('/suggest', UserController.getAutoSuggestUsers);

router
  .route('/:id')
  .get(UserController.getUser)
  .put(UserController.updateUser)
  .delete(UserController.deleteUser);

export default router;
