import { Router } from 'express';
const router = Router();
import users from "./users.routes";
import sexo from "./sexo.routes"
import gender from "./gender.routes"

router.use("/users", users)
router.use("/sexos",sexo)
router.use("/gender",gender)

export default router;