import { Router } from 'express';
import users from "./users.routes";
import sexo from "./sexo.routes"
import gender from "./gender.routes"
import orientation from "./orientations"

const router = Router();
router.use("/users", users)
router.use("/sexos",sexo)
router.use("/gender",gender)
router.use("/orientation",orientation)

export default router;