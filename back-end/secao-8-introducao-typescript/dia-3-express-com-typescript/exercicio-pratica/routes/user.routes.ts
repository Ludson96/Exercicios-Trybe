import { Router } from 'express';
import { UserController } from '../controllers';

const router = Router();

const userController = new UserController

router.get('/', userController.getAll);

export default router;