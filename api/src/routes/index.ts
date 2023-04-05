import { Router } from 'express';
const router = Router();
import users from "./users.routes";

router.use('/users', users)

export default router;