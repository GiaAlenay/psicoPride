import { Router } from 'express';
import users from "./users.routes";
import sexo from "./sexo.routes"
import gender from "./gender.routes"
import orientation from "./orientations"

const router = Router();
router.use("/usuarios", users)
router.use("/sexos",sexo)
router.use("/generos",gender)
router.use("/orientaciones",orientation)

export default router;