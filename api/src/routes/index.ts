import { Router } from 'express';
const router = Router();
import users from "./users.routes";
import sexo from "./sexo.routes"

router.use('/users', users)
router.use("/sexos",sexo)


export default router;