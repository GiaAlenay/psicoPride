import { Router } from 'express';
import {
  createUser,
  getTemasChatOrderByPriority

} from '../controllers/user'; 

const router = Router();

router.post('/', createUser);
router.get('/temaschat',getTemasChatOrderByPriority)

export default router;